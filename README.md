React Web Scaffold
==================

**To Run**

```
npm install
npm start
```

Navigate to http://localhost:8080

**Expectations**

* JWT compliant auth server running on port 4000
* Main api service running on port 3000

If neither api is running, enter the following into browser dev console and reload the page to bypass authentication

```javascript
window.sessionStorage.setItem('authToken', 'randomvalue')
```
