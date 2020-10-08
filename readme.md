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