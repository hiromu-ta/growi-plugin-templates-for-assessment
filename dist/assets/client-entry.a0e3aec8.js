const n=`# \u65E5\u6642
-XXXX/XX/XX XX:XX ~ XX:XX
# \u53C2\u52A0\u8005
-\u53C2\u52A0\u8005A-\u53C2\u52A0\u8005B`,t=`# TEMPLATE
## \u898B\u51FA\u3057
-\u8AAD\u307F\u624B\uFF08\uFF1D\u30BF\u30FC\u30B2\u30C3\u30C8\u3068\u306A\u308B\u9867\u5BA2\uFF09\u304C\u7406\u89E3\u3067\u304D\u308B\u3088\u3046\u306B\u5546\u54C1\u540D\u3092\u3064\u3051\u308B\u3002
### \u526F\u898B\u51FA\u3057
-\u305D\u306E\u5546\u54C1\u306E\u30DE\u30FC\u30B1\u30C3\u30C8\u306F\u8AB0\u3067\u3001\u3069\u3093\u306A\u30E1\u30EA\u30C3\u30C8\u304C\u3042\u308B\u306E\u304B\u3092\u8AAC\u660E\u3059\u308B\u3002\u30BF\u30A4\u30C8\u30EB\u306E\u4E0B\u306B\u4E00\u6587\u306E\u307F\u3002
## \u6982\u8981
-\u88FD\u54C1\u306E\u6982\u8981\u3068\u5229\u70B9\u3092\u8AAC\u660E\u3059\u308B\u3002\u8AAD\u8005\u304C\u4ED6\u306E\u8A18\u4E8B\u3092\u8AAD\u307E\u306A\u3044\u3053\u3068\u3092\u60F3\u5B9A\u3057\u3066\u3001\u3053\u306E\u6BB5\u843D\u3092\u5145\u5B9F\u3055\u305B\u308B\u3002
## \u554F\u984C
-\u88FD\u54C1\u304C\u89E3\u6C7A\u3059\u308B\u554F\u984C\u3092\u8AAC\u660E\u3059\u308B\u3002
## \u89E3\u6C7A\u7B56
-\u3042\u306A\u305F\u306E\u88FD\u54C1\u304C\u3069\u306E\u3088\u3046\u306B\u3057\u3066\u554F\u984C\u3092\u89E3\u6C7A\u3059\u308B\u306E\u304B\u3092\u8AAC\u660E\u3059\u308B\u3002
## \u8A00\u8449
-\u300C\u3042\u306A\u305F\u306E\u4F1A\u793E\u306E\u5E83\u5831\u62C5\u5F53\u8005\u306E\u8A00\u8449\u300D\u3002
## \u59CB\u3081\u65B9
-\u3044\u304B\u306B\u7C21\u5358\u306B\u59CB\u3081\u3089\u308C\u308B\u304B\u3092\u8AAC\u660E\u3059\u308B\u3002
## \u304A\u5BA2\u69D8\u306E\u8A00\u8449
-\u60F3\u5B9A\u3057\u305F\u9867\u5BA2\u304C\u3069\u306E\u3088\u3046\u306B\u5229\u76CA\u3092\u4F53\u9A13\u3057\u305F\u304B\u3092\u8AAC\u660E\u3059\u308B\u8A00\u8449\u3092\u63D0\u4F9B\u3059\u308B\u3002
## \u307E\u3068\u3081\u3068\u6B21\u306E\u30A2\u30AF\u30B7\u30E7\u30F3
-\u7DE0\u3081\u304F\u304F\u308A\u3068\u3057\u3066\u3001\u8AAD\u8005\u304C\u6B21\u306B\u9032\u3080\u3079\u304D\u65B9\u5411\u6027\u3092\u793A\u3059\u3002`,e=()=>{growiFacade.customTemplates["growi-plugin-markdown-templates"]={conference:n,pressrelease:t}},i=()=>{};window.pluginActivators==null&&(window.pluginActivators={});window.pluginActivators["growi-plugin-markdown-templates"]={activate:e,deactivate:i};