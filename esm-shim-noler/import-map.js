const importMap = {
    imports: {
      foo: "./foo.js",
    },
  };
  const im = document.createElement("script");
  im.type = "importmap-shim";
  im.textContent = JSON.stringify(importMap);
  document.currentScript.after(im);