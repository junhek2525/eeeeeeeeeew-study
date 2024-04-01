
// elements 변수에 "div" 태그를 가져와서 저장했어요
const Elements = document.querySelector('div') 
Elements.forEach(Element => {
    console.log(Element.dataset.fruitsName)
})