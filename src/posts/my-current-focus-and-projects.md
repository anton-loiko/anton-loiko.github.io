---
title: My current focus and projects
description: Latest news on my projects, skills, and professional growth.
# Date format: 'yyyy-m-dd'
date: '2024-8-10'
categories:
  - my_updates
published: true
---

Hello everyone! 👋

I wanted to share a bit about what I'm currently working on and my plans for growth as a UI engineer.

At the moment, I'm diving into new opportunities and expanding my knowledge in game development and design. My goal is to broaden my expertise and apply it creatively in new areas.

Additionally, I've been focusing on improving my English skills. I've put aside grammar lessons for now and am concentrating on listening and speaking. To achieve this, I’ve been watching movies and TV shows in English, and I’ve started reading books in the language. This approach is helping me better express my thoughts, utilize my existing knowledge, and understand various accents more effectively.

I'm also continuing to work on my website and blog as part of my project. This site and blog are integral to my portfolio. As a Fullstack engineer, I’m working on projects and researching how to present my Unreal Engine 5 projects in a more engaging way, rather than just listing files like on GitHub. I plan to include a separate page to highlight the experience and details of these projects.

This blog is not intended for influencer activities. It’s mainly for demonstrating my skills and projects.

The blog operates like a Static Site Generator (SSG) using SvelteKit, they have their own mixed variant. It parses MD files with posts during the build process and generates a list and pages for articles. The parser works with standard remark and rehype plugins, and syntax highlighting is provided by shiki.

You can find more details on GitHub.

Thank you for your time!

---

Here are some simple examples for each language, formatted in Markdown with shiki syntax highlighting:

- javascript | typescript
- cpp | csharp
- Dockerfile

### JavaScript

```js
// A simple JavaScript function to add two numbers
function add(a, b) {
	return a + b;
}

console.log(add(5, 3)); // Output: 8
```

### TypeScript

```ts
// A simple TypeScript function with type annotations
type MultiplyFunction = (a: number , b: number) => number;

function multiply:MultiplyFunction (a, b) {
	return a * b;
}

console.log(multiply(4, 6)); // Output: 24
```

### C++

```cpp
// A simple C++ program to calculate the factorial of a number
#include <iostream>

int factorial(int n) {
    if (n <= 1)
        return 1;
    else
        return n * factorial(n - 1);
}

int main() {
    int number = 5;
    std::cout << "Factorial of " << number << " is " << factorial(number) << std::endl;
    return 0;
}
```

### C#

```csharp
// A simple C# program to print "Hello, World!"
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}

```

### Dockerfile

```dockerfile
FROM python:3.12
WORKDIR /usr/local/app

# Install the application dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy in the source code
COPY src ./src
EXPOSE 5000

# Setup an app user so the container doesn't run as the root user
RUN useradd app
USER app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]
```
