# nodejs-otp-generator

> A lightweight node.js package for generating cryptographically secure OTP codes — ideal for SMS, email, and other verification flows.

![npm](https://img.shields.io/npm/v/nodejs-otp-generator.svg)
![license](https://img.shields.io/npm/l/nodejs-otp-generator.svg)
![downloads](https://img.shields.io/npm/dt/nodejs-otp-generator.svg)
![issues](https://img.shields.io/github/issues/andR3Scr1pTx86/nodejs-otp-generator.svg)

---

## 📦 Installation

Use **npm**, **yarn** or **pnpm**:

```bash
npm install nodejs-otp-generator
# or
yarn add nodejs-otp-generator
# or
pnpm add nodejs-otp-generator
```

## 🔧 Utilization

```ts
import { generateOTP } from "nodejs-otp-generator";

const otp = generateOTP(10, {
  digits: true,
  lowerCaseAlphabets: true,
  upperCaseAlphabets: true,
  specialChars: false,
});

console.log("OTP -> ", otp); // OTP -> eyRjCOTj4v
```

### 🔢 Arguments

* `length` - **number** - max length must be between **4** and **10**.
* `options` - **object** - all generation code available options.

#### 🧩 Options

| Property | Type | Default | Required | Description |
|-----------|-------|----------|------------|-------------|
| `numeric` | `boolean` | `false` | ❌ No | accepts numeric digits. |
| `lowerAlphabet` | `boolean` | `false` | ❌ No | accepts lowercase alphabet. |
| `upperAlphabet` | `boolean` | `false` | ❌ No | accepts uppercase alphabet. |
| `specialChar` | `boolean` | `false` | ❌ No | accepts special chars. |

---