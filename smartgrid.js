var smartgrid = require('smart-grid');
 
/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: "15px", /* gutter width px || % */
    container: {
        maxWidth: '1920px', /* max-width оn very large screen */
        fields: '310px' /* side fields */
    },
    breakPoints: {
       sm: {
            'width': '375px',
            'fields': '0px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            some_width: 'Npx',
            some_offset: 'N(px|%)'
        }
        */
    }
    

};
 
smartgrid('src/less/', settings);