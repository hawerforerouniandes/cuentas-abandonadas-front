export class Page {
    // The number of elements in the page
    size = 0;
    // The total number of elements
    totalElements = 0;
    // The total number of pages
    totalPages = 0;
    // The current page number
    pageNumber = 0;
  
    data: any;
  
    sortBy: any;
    
    orderBy?: OrderList[];
    
  }
  
  export class OrderList {
    prop: string;
    dir: string;
  }