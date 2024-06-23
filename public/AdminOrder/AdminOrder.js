let Back = document.getElementById('back');
let header = document.getElementById('Title');

let container = document.getElementById('container');
let MainContainer= document.getElementById('container2');
const indentaion =100;
const url = 'https://'+window.location.hostname;
async function fetchGetAllOrders() {
  try {
      const response = await fetch(url+'/getAllOrders', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          }
      });
      const result = await response.json();
      if (response.ok) {
          console.log(result);
          return result;
      } else {
          console.error(result.message);
      }
  } catch (error) {
      console.error('An error occurred while fetching all orders:', error);
  }
}

fetchGetAllOrders();

async function fetchGetUser(userId) {
  try {
      const response = await fetch(url+'/getUser', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
      });
      const result = await response.json();
      if (response.ok) {
          console.log(result);
          return result;
      } else {
          console.error(result.message);
      }
  } catch (error) {
      console.error('An error occurred while fetching user:', error);
  }
}

async function fetchGetProduct(id) {
  try {
      const response = await fetch(url+'/getProduct', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
      });
      const result = await response.json();
      if (response.ok) {
          console.log(result);
          return result;
      } else {
          console.error(result.message);
      }
  } catch (error) {
      console.error('An error occurred while fetching product:', error);
  }
}

async function fetchDeleteOrder(id) {
  try {
      const response = await fetch(url+'/deleteOrder', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
      });
      const result = await response.json();
      if (response.ok) {
          console.log(result.message);
          return result;
      } else {
          console.error(result.message);
      }
  } catch (error) {
      console.error('An error occurred while deleting order:', error);
  }
}

async function fetchUpdateOrder(id, updateData) {
  try {
      const response = await fetch(url+'/updateOrder', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id, ...updateData }),
      });
      const result = await response.json();
      if (response.ok) {
          console.log(result);
          return result;
      } else {
          console.error(result.message);
      }
  } catch (error) {
      console.error('An error occurred while updating order:', error);
  }
}

class OrderCard {
  constructor(OrderId,Customer
    ,Productslist,Address,Status,Total) {
      this.MainHtml = `
              <span class="Left">
                  <span class="OrderIdField">
                      <label class="OrderId"> Order Id : &nbsp;</label>
                      <label class="content"></label>
                  </span>
                  <span class="CustomerField">
                      <label class="Customer"> Customer : &nbsp;</label>
                      <label class="content"></label>
                  </span>
                  <span class="ProductslistField">
                      <label class="Productslist"> Products list :&nbsp;</label>
                      <label class="content"></label>
                  </span>
                  <span class="AddressField">
                      <label class="Address">Address :&nbsp;</label>
                      <label class="content"></label>
                  </span>
                  <span class="StatusField">
                      <label class="Status">Status :&nbsp;</label>
                      <label class="content"></label>
                  </span>
                  <span class="TotalField">
                      <label class="Total">Total : &nbsp;</label> 
                      <label class="content"></label>
                      <label class="Currency">&nbsp;$</label> 
                  </span> 
              </span>
              <span class="Right">
                  <button class="Edit">
                      Edit
                  </button>
                  <button class="Delete">
                      Delete
                  </button>
              </span>`;
              this.OrderIdField;
              this.ProductslistField;
              this.CustomerField;
              this.StatusField;
              this.AddressField;
              this.TotalField;
          this.export=function(OrderId,Customer
            ,Productslist,Address,Status,Total)
          {
            let card=document.createElement('div');
            card.className='orderCard';
            card.innerHTML=this.MainHtml;
            let OrderIdField = Array.from(Array.from(card.getElementsByClassName('OrderIdField'))[0].getElementsByClassName('content'))[0];
            OrderIdField.textContent=OrderId;
            this.OrderIdField=OrderIdField;

            let ProductslistField = Array.from(Array.from(card.getElementsByClassName('ProductslistField'))[0].getElementsByClassName('content'))[0];
            ProductslistField.innerHTML=Productslist;
            this.ProductslistField=ProductslistField;

            let CustomerField = Array.from(Array.from(card.getElementsByClassName('CustomerField'))[0].getElementsByClassName('content'))[0];
            CustomerField.textContent=Customer;
            this.CustomerField=CustomerField;

            let AddressField = Array.from(Array.from(card.getElementsByClassName('AddressField'))[0].getElementsByClassName('content'))[0];
            AddressField.textContent=Address;
            this.AddressField=AddressField;

            let StatusField = Array.from(Array.from(card.getElementsByClassName('StatusField'))[0].getElementsByClassName('content'))[0];
            StatusField.textContent=Status;
            this.StatusField=StatusField;

            let TotalField = Array.from(Array.from(card.getElementsByClassName('TotalField'))[0].getElementsByClassName('content'))[0];
            TotalField.textContent=Total;
            this.TotalField=TotalField;
           MainContainer.appendChild(card);
          }
          this.export(OrderId,Customer
            ,Productslist,Address,Status,Total);
  }
  
}
let OrderCards = [
  
];
class Order{
  constructor(OrderId,Customer
    ,Productslist,Address,Status,Total)
  {
  this.orderId=OrderId;
  this.customer=Customer;
  this.Products=Productslist;
  this.Address=Address;
  this.Status=Status;
  this.Total=Total;
  }
}
let Orders=[
  new Order('1','Mahmoud','Shoes','Nasr city','Delevired','200'),
  new Order('2','Mohsen','T-Shirt','Obour City','Not Delevired','400'),
  new Order('3','Mazen','Pants','Nozha City','Out For Delivery','350')
];

Back.style.height = window.getComputedStyle(header).height;
window.addEventListener('resize',()=>
{
Back.style.height = window.getComputedStyle(header).height;

});

function intitlaizeOrders()
{
  
 for(i=0;i<Orders.length;i++)
  OrderCards.push(new OrderCard(Orders[i].orderId,Orders[i].customer,
  Orders[i].Products,Orders[i].Address,Orders[i].Status,Orders[i].Total));
}
intitlaizeOrders();