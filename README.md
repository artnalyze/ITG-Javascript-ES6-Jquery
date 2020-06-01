# javascript-es6-jquery-itg

IT Genius : Basic JavaScript ES6 and jQuery

webpack

```
การติดตั้ง webpack ลงไปในโปรเจ็กต์
---
step 1: npm init -y
step 2: npm install webpack webpack-cli --save-dev
step 3: เพิ่มคำสั่งนี้เข้าไปใน package.json
            "build": "webpack --mode development --entry ./src/js/main.js --output ./dist/bundle.js",
            "build:prod": "webpack --mode production --entry ./src/js/main.js --output ./dist/bundle.min.js"
step 4: run เพื่อ build
            npm run build
            ถ้าต้องการ build เป็น production
            npm run build:prod
step 5: แก้ลิงก์ js หน้า index เป็นไฟล์ dist/bundle.js
```
