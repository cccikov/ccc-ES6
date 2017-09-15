// 不报错
'use strict';
if (true) {
  function f() {}
}

// 报错
'use strict';
if (true)
    function f() {}
// In strict mode code, functions can only be declared at top level or inside a block.