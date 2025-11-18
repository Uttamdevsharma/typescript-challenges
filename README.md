# TypeScript Q&A

## ১. TypeScript এ interfaces এবং types এর মধ্যে পার্থক্য

### পার্থক্যসমূহ:

**১. Declaration এবং Extension:**
- `interface` অনেকবার declare করা যায় এবং তারা একে অপরকে extend করতে পারে
- `type` একবার declare করা হলে আবার declare করা যায় না, তবে `&` operator দিয়ে union বা intersection ব্যবহার করে extend করা যায়

**২. ব্যবহার:**
- `interface` সাধারণত object structure, class implement করা এবং inheritance এর জন্য ব্যবহৃত হয়
- `type` আরও versatile, যেমন primitive type, union, intersection, tuple ইত্যাদিও define করা যায়

### উদাহরণ:
```typescript
interface User {
    name: string;
    age: number;
}

interface Employee extends User {
    salary: number;
}

type ID = string | number;
```

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

এই `UserKeys` type ব্যবহার করে type-safe ভাবে User object এর property access করা যায়।