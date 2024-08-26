// assertions  -- used to perform certain validations on the webpage.
// assertion must be inside expect 
/* a) expect(page).toHaveURL("url");   -- to verify url
   b) expect(page).toHaveTitle("title");   -- to check page title
   c) expect(page.locator()).tobeVisible();  -- to check web element present or not
        if logo having alt propertyy and is in div tag in class, we can pick the locator by using class attribute.
        . --> class represt by dot
        .header-logo
    d) expect(page.locator()).toBeEnabled();   -- to check whether the locator is enaable or not
       if we are using id locator, it should start with #.
    e) expect(page.locator()).toBeDisbled();   -- to check whether the locator is disabled or not

    f) expect(page.locator()).toBeChecked();  -- to check whether the radio button or check box is checked or not
     //if we have id in inspect, we can use css by adding #
     we can use this for checkbox also.

     g) expect(page.locator(locator)).toHaveAttribute(attributeType,Value);   -- to check the element having attribute or not
     attribute means type,name,id,class,placeholder -- all comes under attributes.


      
 
 