module.exports = ({ name, price1, price2, receiptId }) => {
  const today = new Date()
  return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
            * {
                  box-sizing: border-box;
                  font-family: Open Sans, sans-serif;
            }
            
            html,
            body {
                  margin: 0px;
                  padding: 10px;
            }

            .invoice-box {
               max-width: 900px;
               margin: auto;
               padding: 10px;
               font-size: 14px;
               line-height: 24px;
               font-family: 'Open sans', sans-serif;
               color: #555;
           
           }
           
           table, th, td, tr {
             border: none;
             width: 100%;
           }           
            
            .main {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  width: 100%;
                  height: 100%;
                  padding-left: 20px;
                  padding-right: 40px;
            }
            
            .header {
                  width: 100%;
                  padding-top: 10px;
            }
            
            .footer {
                  font-family: 'Open sans', sans-serif;
                  color: #555;
                  padding-bottom: 20px;
            }
            
            .footer-page {
                  text-align: end;
            }
          </style>
       </head>
       <body>
          <div class="invoice-box">

               <div style="border: 1px solid grey; margin: 5px; ">
               <div style="display:flex; padding: 10px; ">
                  <div style="display: flex; flex: 1; justify-content: center;">
                  <img src="http://localhost:5000/logo-ted.png" style="max-width: 50%; height: 70px;" />
                  </div>
               </div>
               <h4 style="text-align: center; padding: 0; margin: 0; text-decoration: underline">TRIBUNAL ELECTORAL DEPARTAMENTAL DE TARIJA</h4>
               <h3 style="text-align: center; padding: 0; margin: 0">HOJA DE RUTA - {{acronymArea}}</h3>
               <div style="text-align: center; font-size: 11px;">Fecha de emisión: {{printAt}} por usuario:  {{userPrintAt}}</div>
               <div style="display: flex; justify-content: flex-end; margin-top: -1.5rem; margin-right: 1.5rem;">
                        <div style="border: 1px solid grey; padding: 5px;">
                           <div style="font-weight: bold;"><div style="display: inline;">Nº: </div>{{n}}</div>
                        </div>
               </div>

               <div style="display: flex; flex-direction: column; padding: 10px;">
                  <div style="font-weight: bold">DATOS DE RECEPCION</div>
                  <div style="display: flex;">
                        <div style="flex: 1.5">
                           <div><div style="font-weight: bold; display: inline;">Fecha y Hora de Ingreso: </div>{{reception.dateAdmission}}</div>
                        </div>
                        <div style="flex: 1">
                           <div><div style="font-weight: bold; display: inline;">Nº de Fojas: </div>{{reception.nPages}}</div>
                        </div>
                  </div>
                  <div style="display: flex;">
                        <div style="flex: 1.5">
                           <div><div style="font-weight: bold; display: inline;">Cite: </div>{{reception.cite}}</div>
                        </div>
                        <div style="flex: 1">
                           <div><div style="font-weight: bold; display: inline;">Fecha del Cite: </div>{{reception.dateCite}}</div>
                        </div>
                  </div>
                  <div style="display: flex;">
                        <div style="flex: 1">
                           <div><div style="font-weight: bold; display: inline;">Referencia o Contenido: </div>{{reception.reference}}</div>
                        </div>
                  </div>
                  <div style="display: flex;">
                        <div style="flex: 1">
                           <div><div style="font-weight: bold; display: inline;">Procedencia: </div>{{reception.origin}}</div>
                        </div>
                  </div>
                  <div style="display: flex;">
                        <div style="flex: 1">
                           <div><div style="font-weight: bold; display: inline;">Recepcionado: </div>{{reception.approved}}</div>
                        </div>
                  </div>
               </div>
            </div>


          </div>
       </body>
    </html>
    `
}
