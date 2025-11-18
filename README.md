# TypeScript Q&A

## ১. TypeScript এ interfaces এবং types এর মধ্যে পার্থক্য

### পার্থক্য ১: Declaration এবং Merging

#### ১️⃣ Interface declare করা
```typescript
// প্রথমবার declare
interface User {
    id: number;
    name: string;
}

// দ্বিতীয়বার declare (merge হবে)
interface User {
    email: string;
}

const user1: User = {
    id: 1,
    name: "Uttam",
    email: "uttam@example.com"
};
```

**বিস্তারিত:**
- প্রথমবার declare করলে `User` interface তৈরি হয়
- দ্বিতীয়বার declare করলে TypeScript এটি merge করে। ফলে `User` interface এ এখন `id`, `name`, `email` সব থাকবে
- এটাকে আমরা বলি interface declare multiple times এবং merge-able

#### ২️⃣ Type declare করা
```typescript
// type declare
type Product = {
    id: number;
    name: string;
};

// আবার declare করা যাবে না
// type Product = { price: number };  // ❌ Error

// কিন্তু extend করতে পারি & operator দিয়ে
type ProductWithPrice = Product & { price: number };

const item: ProductWithPrice = {
    id: 101,
    name: "Laptop",
    price: 50000
};
```

**বিস্তারিত:**
- Type একবার declare করলে আর declare করা যায় না
- কিন্তু `&` operator দিয়ে নতুন type তৈরি করে আগের type-কে extend করা যায়

### পার্থক্য ২: ব্যবহার

- `interface` সাধারণত object structure, class implement করা এবং inheritance এর জন্য ব্যবহৃত হয়
- `type` আরও versatile, যেমন primitive type, union, intersection, tuple ইত্যাদিও define করা যায়

---

## ২. TypeScript এ keyof keyword এর ব্যবহার

`keyof` keyword ব্যবহার করে কোনো object type এর সমস্ত property এর key এর union type তৈরি করা যায়। এটি type-safe programming এবং dynamic property access এর জন্য খুবই গুরুত্বপূর্ণ।

### উদাহরণ:
```typescript
interface User {
    id: number;
    name: string;
    email: string;
}

type UserKeys = keyof User;
// UserKeys এর মান হবে: "id" | "name" | "email"
```

এই `UserKeys` type ব্যবহার করে type-safe ভাবে `User` object এর property access করা যায়।