# Responsive menu snippet

May come in handy at some point

Based on this dev.to post <https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0>

## Possible solution for iOS

```
document.body.addEventListener('touchmove', function(e){ 
   document.getElementsByTagName('body')[0]. style .height = "100vh";
   document.getElementsByTagName('body')[0]. style. overflow = "hidden";
 });
 ```


 Alt solution

```
 // src/utils/scroll-lock.js
const $body = document.querySelector('body');
let scrollPosition = 0;

export default {
  enable() {
    scrollPosition = window.pageYOffset;
    $body.style.overflow = 'hidden';
    $body.style.position = 'fixed';
    $body.style.top = `-${scrollPosition}px`;
    $body.style.width = '100%';
  },
  disable() {
    $body.style.removeProperty('overflow');
    $body.style.removeProperty('position');
    $body.style.removeProperty('top');
    $body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
  }
};
```