function processOrder() {
  return new Promise((resolve, reject) => {
    console.log("processing order..");
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({
          orderid: 42017,
          customer: "shuvo",
          item: "chicken burger",
          quantity: 2,
          total: 500,
        });
      } else {
        reject("failed to process the order");
      }
    }, 3000);
  });
}

processOrder()
  .then((customer) => {
    console.log("order data is receive");
    console.log("order id: ", customer.orderid);
    console.log("name: ", customer.customer);
    console.log("item: ", customer.item);
    console.log("quantity: ", customer.quantity);
    console.log("total: ", customer.total);
  })
  .catch((error) => {
    console.log("Error: ", error);
  })
  .finally(() => {
    console.log("order processing completed");
  });
