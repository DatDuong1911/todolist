var btn = document.querySelector('button')
var input = document.querySelector('input')
var container = document.querySelector('.container')
var list = []
btn.addEventListener('click', function (e) {
    var txt =input.value.trim()
    var check = validate(txt)
    if(check.status){
        list.push({
            title: input.value.trim(),
            status: 'Chưa xong'
        })
        render()
        alert(check.message)
    }
    else{
        alert(check.message)
    }
    
   
})
function render() {
    container.innerHTML = ''
    list.forEach(function (item, index) {
        var div = document.createElement('div')
        div.innerHTML =
            `
        <input type='text' value='${item.title}----${item.status}' disabled/>
        <button type='button' class='update'>Cap nhat</button>

        `
        div.querySelector('button').onClick = function (e) {
            list(index).title = input.value
        }
        div.querySelector('.update').onClick=function(e){
            var inputRow =e.target.previousElementSibling
            inputRow.toggleAttribute('disabled')
        }
        container.appendChild(div)
    })
}






function validate(text) {

    if (text.length < 3) {
        return {
            status: false,
            message: "Task moi phai nhieu hon 3 ky tu!!!"
        }
    }
    if (text.length > 30) {
        return {
            status: false,
            message: 'task moi phai nho hon 30 ky tu!!!'
        }
    }
    return {
        status: true,
        message: 'Da them task moi.'
    }
}