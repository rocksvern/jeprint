const jeprint = function() {

    let style = `@media print {
        body {
            display: none;
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

    function printHtml(content) {
        let printable = document.createElement('div')
        printable.innerHTML = content
        printable.id = "printable"
        document.getElementsByTagName('html')[0].appendChild(printable)

        print();

    }

    window.onafterprint = function () {
        let printable = document.getElementById('printable')
        printable.remove();
    }

    return {
        printHtml: printHtml
    }
}()

export default jeprint