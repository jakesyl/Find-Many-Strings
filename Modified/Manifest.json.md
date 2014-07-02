{//my notes = //
  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "popup.html"//for the popup which is the gui
  },
  "content_scripts": [ {
      "matches": [ "<all_urls>" ],
      "js": [ "jquery.js", "jquery.highlight-3.js", "selection.js" ]
      //split up by file desc:
      //highlight is
   } ],
  "permissions": [
  "tabs", "http://*/*", "https://*/*"
  ]
}
//unnecesary  
"manifest_version": 2,
  "version": "1.6",
  "name": "Find Many Strings",
  "description": "Search and highlight multiple strings in webpages",