var jeprint = function(){
    var html = document.getElementsByTagName('html')[0]

    let style = `@media print {
        body {
            visibility: hidden;
        }
        #printable {
            display: block !important;
        }
    }

    @media screen {
        #printable {
            display: none;
        }
    }`

    let styleNode = document.createElement('style');
    styleNode.innerHTML = style;

    document.getElementsByTagName('head')[0].appendChild(styleNode);

    function letPrint(content){
        let printable = document.createElement('div')
        printable.innerHTML = content
        printable.id = "printable"
        html.appendChild(printable)

        print();
       
    }

    window.onafterprint = function(){
        let printable = document.getElementById('printable')
        printable.remove();
    }

    return {
        printText: letPrint
    }
}()

jeprint.printText('<p><strong>La Raja</strong>, lo logre!!!!</p>');