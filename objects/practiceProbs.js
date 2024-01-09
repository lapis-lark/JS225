let invoices = {};
invoices.unpaid = [];
invoices.paid = [];

invoices.add = function(name, amount) {
  this.unpaid.push({name, amount});
}

invoices.totalDue = function() {
  return this.unpaid.reduce((memo, invoice) => memo + invoice.amount, 0)
}

invoices.totalPaid = function() {
  return this.paid.reduce((memo, invoice) => memo + invoice.amount, 0)
}

invoices.payInvoice = function(name) {
  let tempUnpaid = [];
  this.unpaid.forEach(item => {
    if (item.name === name) {
      this.paid.push(item);
    } else {
      tempUnpaid.push(item)
    }
  });

  this.unpaid = tempUnpaid;
}

invoices.add('due north development', 250);
invoices.add('moonbeam interactive', 187.50);
invoices.add('slough digital', 300);
invoices.payInvoice('moonbeam interactive');

console.log(invoices.totalDue());
console.log(invoices.totalPaid());