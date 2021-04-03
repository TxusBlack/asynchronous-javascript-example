// Archivo sin logica solo para convertirlo a async/await con try catch
// Y Promise.all([])

const example = () => {
  fee.firstFunction({
    resource_type: "orders",
  }, order).then(function (result) {
    console.log("Dropshipping");
  })["catch"](function (err) {
    fee.secondFunction({
      amount: data.amount,
      data: {
        ...data
      }
    }).then(function (data) {
      console.log("Se hizo correctamente");
    });
    messagesModel.saveMessage({
      text: "Mensaje guardado :)",
    }, function (err, rows) {
      console.log("Mensaje guardado de aprobación del pago");
    });
  });
}

const asyncExample = () => {
  try {
    
  } catch (error) {
    
  }
}

const promiseAllExample = () => {

}
