# Flipkart-Clone Project Diary (Milestone Progress)

This diary will track all progress step-by-step, so you can continue anytime from this doc.

---

## Milestone 1: Project Setup ✅

- Created root folder `flipkart-clone/`.
- Setup monorepo structure with `apps/frontend` and `apps/backend`.
- Installed core dependencies:

  - Frontend: React + Vite + React Router + TanStack Query + Axios.
  - Backend: Express + Mongoose + CORS + JWT + bcrypt + dotenv.

- Added concurrently in root to run frontend + backend together.
- Verified both apps run:

  - Frontend → [http://localhost:5173](http://localhost:5173)
  - Backend → [http://localhost:5000](http://localhost:5000)

---

## Milestone 2: User & Auth (Next)

- Plan:

  - User model (name, email, phone, passwordHash, role).
  - JWT-based login & register.
  - Refresh token with HttpOnly cookie.
  - Auth routes: `/auth/register`, `/auth/login`, `/auth/refresh`.
  - Hash password with bcrypt.
  - Protect routes with middleware.

- Test with Thunder Client/Postman.

---

## Milestone 3: Catalog & Products

- Plan:

  - Category + Brand models.
  - Product model with variants (size, color, stock, price).
  - Admin CRUD for categories, brands, and products.
  - Frontend pages: Category listing, Product listing, Product details.
  - Filters: by category, brand, price.

---

## Milestone 4: Cart & Checkout

- Plan:

  - Cart model with items, quantity, priceSnapshot.
  - Cart APIs: add item, update qty, remove item.
  - Server-side price validation.
  - Checkout API: validate cart, reserve stock.
  - Payment integration (Razorpay/Stripe).

---

## Milestone 5: Orders & Seller Portal

- Plan:

  - Order model with lifecycle (created, paid, shipped, delivered, cancelled).
  - Seller onboarding & product listing.
  - Order management for sellers.
  - Order tracking for users.

---

## Milestone 6: Advanced Features

- Returns/Refunds workflow (RMA).
- Reviews/Q\&A system.
- Coupons & promotions.
- Notifications (email/SMS/WhatsApp).

---

## Notes

- All progress will be updated here milestone by milestone.
- You can just say: **“Continue from Project Diary”** in a new chat and work will continue from here.

$$










0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000



00 => High-Level Features (MVP → Advanced)

MVP

Auth: Email/Phone OTP, password login, social (Google) optional.

Catalog: Categories, subcategories, brands, product variants (size/color), images, specs.

Search: Full-text search, filters, sort, pagination.

Cart + Wishlist.

Checkout: Address book, shipping, taxes, payment gateway, COD rules.

Orders: Order creation, payment capture, invoice, order tracking, cancellation.

Admin: Category/brand CRUD, product CRUD, banner management, basic analytics.

Advanced

Seller Portal: onboarding/KYC, product listing, inventory, pricing, settlements.

Promotions: Coupons, bank offers, cart rules, product-level discounts.

Dynamic Pricing & Inventory rules: min/max price, flash sale, stock reservations.

Return/Refund/Replacement workflow with RMA.

Delivery Pincode serviceability, shipping rates, promised-date ETA.

Notifications: email/SMS/WhatsApp/push.

Reviews/Q&A with moderation and helpful votes.

Personalization: recently viewed, recommendations (rule-based → ML ready).

Observability: logs, metrics, tracing; SLA monitors.


1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111



01 => Architecture Overview

Client: React (Vite) + TanStack Query for server state, Zustand/Context for UI state.

API Gateway: Express app exposing REST routes; modular services (User, Catalog, Cart, Order, Payment, Seller, Promo, Review).

DB: MongoDB (replica set) with proper indexes; Redis for caching, sessions, rate limits, locks.

Files: S3/GCS for product images & invoices; signed URLs.

Search: MongoDB text indexes (v1); switchable to Meilisearch/Elastic later.

Async: BullMQ (Redis) for background jobs (emails, webhooks, invoices, settlement).

Infra: Nginx reverse proxy, Dockerized services, CI/CD (GitHub Actions), .env per env.


22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222



02 => Domain Modeling (Core Collections)
User

_id, name, email (unique), phone (unique), hash, roles (user, admin, seller), addresses[], status, createdAt

Indexes: { email: 1 }, { phone: 1 }

Category

_id, name, slug (unique), parentId (null for root), path[], attributes[]

Indexes: { slug: 1, unique: true }, { parentId: 1 }

Brand

_id, name, slug, logoUrl

Product

_id, title, slug, categoryId, brandId, sellerId, media[], specs (key→value), variants[] (sku, attrs, mrp, price, stock, barcode), ratings{avg,count}, status (active/draft), searchText

Indexes: { slug: 1 }, { categoryId: 1 }, { brandId: 1 }, { 'variants.sku': 1, unique: true }, text(searchText)

InventoryLedger (event-sourced)

_id, sku, change (+/-), reason (order_reserve, order_cancel, manual, return), refId, createdAt

Indexes: { sku: 1, createdAt: -1 }

Cart

userId, items[] ({ sku, qty, priceSnapshot }), appliedCoupon, totals{mrp,discount,shipping,tax,grand }, version

Indexes: { userId: 1 }

Order

_id, orderNo, userId, items[] ({ sku, title, image, qty, price, tax, subtotal }), shippingAddress, payment{ mode, status, txnId }, status (created/paid/packed/shipped/delivered/cancelled/returned), log[], invoiceUrl, eta

Indexes: { orderNo: 1, unique: true }, { userId: 1 }, { status: 1, createdAt: -1 }

Payment

_id, orderId, gateway (Razorpay/Stripe), amount, currency, status, gatewayRefs, webhookVerified

Coupon/Promotion

code, type (flat/percent/cart_rule/product_rule), value, maxDiscount, minCart, validFrom/To, usageLimit, perUserLimit, eligibility (categories, SKUs, user segments)

Indexes: { code: 1 }, { validFrom: 1, validTo: 1 }

Review

productId, userId, rating, title, text, images[], helpfulCount, status

Indexes: { productId: 1 }, { userId: 1 }



333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333



03=> Critical Business Flows
A) Cart & Price Calculation (deterministic & auditable)

Fetch SKUs with price, taxRate, stock → cache prices in Redis.

Apply product-level discounts → then coupon rules → then bank offers (post-payment display).

Compute totals server-side using immutable price snapshots. Persist priceSnapshot per cart item & order item.

Reserve stock on order creation (decrement available via Redis distributed lock). On cancel/timeout, release reservation.

B) Order Lifecycle

created → payment_pending (TTL 15 min) →

On payment webhook verify HMAC → set paid → issue invoice (PDF), deduct stock permanently.

packed → shipped (trackingId, carrier) → delivered (auto after carrier webhook or T+7 fallback) → allow review.

cancelled (pre-ship) with instant release & refund; returned with RMA and QC step.

C) Returns/Refunds

Window per category (e.g., electronics 7 days). Conditions stored on product/category.

RMA creates pickup; on QC pass → refund to original source; on fail → reship.

D) Seller Payouts

Compute settlement after return window. Fees: platform fee, PG fee, shipping, TCS/GST; generate statement.




4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444



04=> API Design (REST, versioned /api/v1)

Auth

POST /auth/register (email/phone OTP optional)

POST /auth/login

POST /auth/refresh

POST /auth/otp/send|verify

Catalog

GET /categories, GET /categories/:slug

GET /products (q, category, brand, price[min,max], attrs, sort, page, limit)

GET /products/:slug

Cart

GET /cart | POST /cart/items | PATCH /cart/items/:sku | DELETE /cart/items/:sku

POST /cart/apply-coupon

Checkout/Order

POST /checkout → price revalidation + stock reservation

POST /payments/:orderId/create-intent

POST /payments/webhook (idempotent)

GET /orders, GET /orders/:orderNo, POST /orders/:orderNo/cancel

Seller (auth:seller)

POST /seller/products, PATCH /seller/products/:id, GET /seller/orders

Admin

CRUD: category, brand, product, coupon, banner; dashboards/metrics.


55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555


05 => Security & Compliance

JWT access (15m) + refresh (7d), rotate on use; store access token in memory, refresh in HttpOnly cookie.

RBAC middleware: user, seller, admin roles + fine-grained permissions.

Input validation with Zod/Yup (server) + celebrate/Joi for Express.

Rate limiting (per-IP & per-user) and bot mitigation on auth/cart.

CORS locked to allowed origins; Helmet; CSRF on non-REST forms if any.

Passwords: argon2id/bcrypt with strong params; OTPs hashed + TTL.

Payments: verify webhook signatures; idempotency keys for payment/order creation.

Logging PII carefully; GDPR-like deletion; audit trails for admin actions.


6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666


06 => Performance & Scaling

Read-optimized endpoints with projection & lean(); paginate everything.

Indexes: compound on popular filters (e.g., { categoryId: 1, 'variants.price': 1 }).

Redis Caching: product details, price lists, home page sections, cart session.

CDN for images; responsive variants generated by a worker.

Background jobs (BullMQ): emails, invoice PDFs, cleanups, price syncs.

Feature flags for experiments.


777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777


07 => DevOps & Environments

Envs: dev, staging, prod. Separate DB/Redis/buckets.

CI/CD: Lint + typecheck + test + build + Docker push + deploy.

Runtime: Nginx → Node API (PM2). Frontend on CDN/static hosting.

Secrets: .env via Vault/GitHub Secrets. Do not commit.

Backups: Mongo daily snapshot; Redis RDB; S3 versioning.


888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888


08 => Testing Strategy

Unit: services (pricing, coupon, inventory).

Integration: API routes with supertest + in-memory Mongo.

E2E: Playwright (guest browse, add-to-cart, checkout mock, order view).

Contract: OpenAPI schema → client generation optional.
$$
