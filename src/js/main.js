
window.addEventListener('DOMContentLoaded', () => {
    const toggleHTMLClass = ({
        element,
        onlyThisElements = [],
        type = '',
        checkHasActiveClass = false
    }) => {
    
        let arrayElements = [];
    
        if (element || onlyThisElements.length) {
            const type = element && element.getAttribute('data-js-toggle-class-type') || onlyThisElements[0] && onlyThisElements[0].getAttribute('data-js-toggle-class-type');
    
            if (type) {
                arrayElements = document.querySelectorAll(`[data-js-toggle-class-type="${type}"]`);
            } else {
                console.log('element', element);
                arrayElements =
                    element &&
                    element.parentElement.querySelectorAll('[data-js-toggle-class]'
                );
            }
        }
    
        if (checkHasActiveClass && onlyThisElements.length) {
            let result = false;
    
            onlyThisElements = (
                onlyThisElements[0].getAttribute('data-js-toggle-class-type') &&
                document.querySelectorAll(`[data-js-toggle-class-type="${onlyThisElements[0].getAttribute('data-js-toggle-class-type')}"]`)
            ) || onlyThisElements;
    
            console.log('123 onlyThisElements', onlyThisElements);
    
            onlyThisElements.forEach((element) => {
                if (element) {
                    const classes = element && element.getAttribute('data-js-toggle-class');
                    const classesArray = classes && classes.split(',');
            
                    if (classesArray && classesArray.length) {
                        const toggleValues = classesArray[0].split('>');
        
                        if (
                            toggleValues &&
                            toggleValues.length &&
                            (
                                element.classList.contains(toggleValues[1]) || element.hasAttribute('data-js-toggle-active')
                            )
                        ) {
                            result = true;
                        }
                    }
                }
            });
    
            return result;
        }
    
        const changeClassValueElements = (classValueElements) => {
            classValueElements && classValueElements.length && classValueElements.forEach((classValueElement) => {
                const classes = classValueElement.getAttribute('data-js-toggle-class');
                const classesArray = classes && classes.split(',');
    
                console.log('javascript test', type);
    
                classesArray && classesArray.length && classesArray.forEach((classItem) => {
                    const toggleValues = classItem.split('>');
    
                    if (toggleValues.length === 2) { 

                        console.log('toggleValues', toggleValues);
    
                        if (type === 'remove') {
                            if (toggleValues[0] === '' || toggleValues[0] === ' ') {
                                classValueElement.classList.remove(toggleValues[1]);
                            } else {
                                if (classValueElement.classList.contains(toggleValues[1])) {
                                    classValueElement.classList.remove(toggleValues[1]);
                                    classValueElement.classList.add(toggleValues[0]);
                                }
                            }
                        }
    
                        if (type === 'add') {
                            if (toggleValues[0] === '' || toggleValues[0] === ' ') {
                                classValueElement.classList.add(toggleValues[1]);
                            } else {
                                if (classValueElement.classList.contains(toggleValues[0])) {
                                    classValueElement.classList.remove(toggleValues[0]);
        
                                    classValueElement.classList.add(toggleValues[1]);
                                }
                            }
                        }
                    }
                });
            });
        }
    
        changeClassValueElements(arrayElements);
    }

    (() => {
        try {
            const triggers = document.querySelectorAll('[data-js-nav-trigger]');

            triggers.forEach((trigger) => {
                let isShow = false;
                trigger && trigger.addEventListener('click', (event) => {
                    const type = event.currentTarget.getAttribute('data-js-nav-trigger');
                    const selector = type && document.querySelector(`[data-js-nav=${type}`);
                    document.querySelectorAll(('[data-js-nav]')).forEach(item => {
                        if (item.getAttribute('data-js-nav-trigger') !== type) {
                            item.classList.add('t-trY-100-p-', 'vsb-hidd', 'opc-0');
                        }
                    });
                    const toggleClassElements = [...trigger.querySelectorAll('[data-js-toggle-class]'), trigger];

                    if (selector) {

                        const show = () => {
                            isShow = true;
                            selector.classList.remove('t-trY-100-p-', 'vsb-hidd', 'opc-0', 't-0');
                            toggleClassElements.forEach((toggleClassElement) => {
                                toggleHTMLClass({
                                    element: toggleClassElement,
                                    type: 'add'
                                });
                            });
                        }

                        const hidden = () => {
                            isShow = false;
                            selector.classList.add('t-trY-100-p-', 'vsb-hidd', 'opc-0', 't-0');
                            toggleClassElements.forEach((toggleClassElement) => {
                                toggleHTMLClass({
                                    element: toggleClassElement,
                                    type: 'remove'
                                });
                            });
                        }

                        isShow ? (
                            hidden()
                        ) : (
                            show()
                        );

                        const outsideCloseHandler = (event) => {
                            let isClickInside = (
                                selector.contains(event.target) ||
                                (
                                    trigger.contains(event.target)
                                )
                            );
            
                            if (!isClickInside || event.target.hasAttribute('data-js-nav-outside-close')) {
                                hidden();
                                document.removeEventListener('click', outsideCloseHandler);
                            }
                        }
                        document.addEventListener('click', outsideCloseHandler);
                    }
                });
            });
        } catch(error) {
            console.log('error', error);
        }
    })();

    (() => {

        try {
            !function(){"use strict";var t=function(t){this.input=null,this.inputDisplay=null,this.slider=null,this.sliderWidth=0,this.sliderLeft=0,this.pointerWidth=0,this.pointerR=null,this.pointerL=null,this.activePointer=null,this.selected=null,this.scale=null,this.step=0,this.tipL=null,this.tipR=null,this.timeout=null,this.valRange=!1,this.values={start:null,end:null},this.conf={target:null,values:null,set:null,range:!1,width:null,scale:!0,labels:!0,tooltip:!0,step:null,disabled:!1,onChange:null},this.cls={container:"rs-container",background:"rs-bg",selected:"rs-selected",pointer:"rs-pointer",scale:"rs-scale",noscale:"rs-noscale",tip:"rs-tooltip"};for(var i in this.conf)t.hasOwnProperty(i)&&(this.conf[i]=t[i]);this.init()};t.prototype.init=function(){return"object"==typeof this.conf.target?this.input=this.conf.target:this.input=document.getElementById(this.conf.target.replace("#","")),this.input?(this.inputDisplay=getComputedStyle(this.input,null).display,this.input.style.display="none",this.valRange=!(this.conf.values instanceof Array),!this.valRange||this.conf.values.hasOwnProperty("min")&&this.conf.values.hasOwnProperty("max")?this.createSlider():console.log("Missing min or max value...")):console.log("Cannot find target element...")},t.prototype.createSlider=function(){return this.slider=i("div",this.cls.container),this.slider.innerHTML='<div class="rs-bg"></div>',this.selected=i("div",this.cls.selected),this.pointerL=i("div",this.cls.pointer,["dir","left"]),this.scale=i("div",this.cls.scale),this.conf.tooltip&&(this.tipL=i("div",this.cls.tip),this.tipR=i("div",this.cls.tip),this.pointerL.appendChild(this.tipL)),this.slider.appendChild(this.selected),this.slider.appendChild(this.scale),this.slider.appendChild(this.pointerL),this.conf.range&&(this.pointerR=i("div",this.cls.pointer,["dir","right"]),this.conf.tooltip&&this.pointerR.appendChild(this.tipR),this.slider.appendChild(this.pointerR)),this.input.parentNode.insertBefore(this.slider,this.input.nextSibling),this.conf.width&&(this.slider.style.width=parseInt(this.conf.width)+"px"),this.sliderLeft=this.slider.getBoundingClientRect().left,this.sliderWidth=this.slider.clientWidth,this.pointerWidth=this.pointerL.clientWidth,this.conf.scale||this.slider.classList.add(this.cls.noscale),this.setInitialValues()},t.prototype.setInitialValues=function(){if(this.disabled(this.conf.disabled),this.valRange&&(this.conf.values=s(this.conf)),this.values.start=0,this.values.end=this.conf.range?this.conf.values.length-1:0,this.conf.set&&this.conf.set.length&&n(this.conf)){var t=this.conf.set;this.conf.range?(this.values.start=this.conf.values.indexOf(t[0]),this.values.end=this.conf.set[1]?this.conf.values.indexOf(t[1]):null):this.values.end=this.conf.values.indexOf(t[0])}return this.createScale()},t.prototype.createScale=function(t){this.step=this.sliderWidth/(this.conf.values.length-1);for(var e=0,s=this.conf.values.length;e<s;e++){var n=i("span"),l=i("ins");n.appendChild(l),this.scale.appendChild(n),n.style.width=e===s-1?0:this.step+"px",this.conf.labels?l.innerHTML=this.conf.values[e]:0!==e&&e!==s-1||(l.innerHTML=this.conf.values[e]),l.style.marginLeft=l.clientWidth/2*-1+"px"}return this.addEvents()},t.prototype.updateScale=function(){this.step=this.sliderWidth/(this.conf.values.length-1);for(var t=this.slider.querySelectorAll("span"),i=0,e=t.length;i<e;i++)t[i].style.width=this.step+"px";return this.setValues()},t.prototype.addEvents=function(){var t=this.slider.querySelectorAll("."+this.cls.pointer),i=this.slider.querySelectorAll("span");e(document,"mousemove touchmove",this.move.bind(this)),e(document,"mouseup touchend touchcancel",this.drop.bind(this));for(var s=0,n=t.length;s<n;s++)e(t[s],"mousedown touchstart",this.drag.bind(this));for(var s=0,n=i.length;s<n;s++)e(i[s],"click",this.onClickPiece.bind(this));return window.addEventListener("resize",this.onResize.bind(this)),this.setValues()},t.prototype.drag=function(t){if(t.preventDefault(),!this.conf.disabled){var i=t.target.getAttribute("data-dir");return"left"===i&&(this.activePointer=this.pointerL),"right"===i&&(this.activePointer=this.pointerR),this.slider.classList.add("sliding")}},t.prototype.move=function(t){if(this.activePointer&&!this.conf.disabled){var i=("touchmove"===t.type?t.touches[0].clientX:t.pageX)-this.sliderLeft-this.pointerWidth/2;return(i=Math.round(i/this.step))<=0&&(i=0),i>this.conf.values.length-1&&(i=this.conf.values.length-1),this.conf.range?(this.activePointer===this.pointerL&&(this.values.start=i),this.activePointer===this.pointerR&&(this.values.end=i)):this.values.end=i,this.setValues()}},t.prototype.drop=function(){this.activePointer=null},t.prototype.setValues=function(t,i){var e=this.conf.range?"start":"end";return t&&this.conf.values.indexOf(t)>-1&&(this.values[e]=this.conf.values.indexOf(t)),i&&this.conf.values.indexOf(i)>-1&&(this.values.end=this.conf.values.indexOf(i)),this.conf.range&&this.values.start>this.values.end&&(this.values.start=this.values.end),this.pointerL.style.left=this.values[e]*this.step-this.pointerWidth/2+"px",this.conf.range?(this.conf.tooltip&&(this.tipL.innerHTML=this.conf.values[this.values.start],this.tipR.innerHTML=this.conf.values[this.values.end]),this.input.value=this.conf.values[this.values.start]+","+this.conf.values[this.values.end],this.pointerR.style.left=this.values.end*this.step-this.pointerWidth/2+"px"):(this.conf.tooltip&&(this.tipL.innerHTML=this.conf.values[this.values.end]),this.input.value=this.conf.values[this.values.end]),this.values.end>this.conf.values.length-1&&(this.values.end=this.conf.values.length-1),this.values.start<0&&(this.values.start=0),this.selected.style.width=(this.values.end-this.values.start)*this.step+"px",this.selected.style.left=this.values.start*this.step+"px",this.onChange()},t.prototype.onClickPiece=function(t){if(!this.conf.disabled){var i=Math.round((t.clientX-this.sliderLeft)/this.step);return i>this.conf.values.length-1&&(i=this.conf.values.length-1),i<0&&(i=0),this.conf.range&&i-this.values.start<=this.values.end-i?this.values.start=i:this.values.end=i,this.slider.classList.remove("sliding"),this.setValues()}},t.prototype.onChange=function(){var t=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){if(t.conf.onChange&&"function"==typeof t.conf.onChange)return t.conf.onChange(t.input.value)},500)},t.prototype.onResize=function(){return this.sliderLeft=this.slider.getBoundingClientRect().left,this.sliderWidth=this.slider.clientWidth,this.updateScale()},t.prototype.disabled=function(t){this.conf.disabled=t,this.slider.classList[t?"add":"remove"]("disabled")},t.prototype.getValue=function(){return this.input.value},t.prototype.destroy=function(){this.input.style.display=this.inputDisplay,this.slider.remove()};var i=function(t,i,e){var s=document.createElement(t);return i&&(s.className=i),e&&2===e.length&&s.setAttribute("data-"+e[0],e[1]),s},e=function(t,i,e){for(var s=i.split(" "),n=0,l=s.length;n<l;n++)t.addEventListener(s[n],e)},s=function(t){var i=[],e=t.values.max-t.values.min;if(!t.step)return console.log("No step defined..."),[t.values.min,t.values.max];for(var s=0,n=e/t.step;s<n;s++)i.push(t.values.min+s*t.step);return i.indexOf(t.values.max)<0&&i.push(t.values.max),i},n=function(t){return!t.set||t.set.length<1?null:t.values.indexOf(t.set[0])<0?null:!t.range||!(t.set.length<2||t.values.indexOf(t.set[1])<0)||null};window.rSlider=t}();

            const slides = document.querySelectorAll('[data-js-range-slider]');

            slides.length && slides.forEach((slide) => {
                const min = 0 || +slide.getAttribute('data-js-range-slider-min');
                const max = +slide.getAttribute('data-js-range-slider-max') || 100;
                const step = +slide.getAttribute('data-js-range-slider-step') || 10;
                const target = slide.getAttribute('data-js-range-slider');

                const minInput = slide.querySelector('[data-js-range-slider-input-min]');
                const maxInput = slide.querySelector('[data-js-range-slider-input-max]');
                minInput && (minInput.value = 0);
                const setString = slide.getAttribute('data-js-range-slider-input-set')
                const set = (( setString && setString.split(',')) || [10, 40]).map(item => +item);

                const setInputsValue = (valueString) => {
                    const array = valueString.split(',');

                    array.length && minInput && (minInput.value = array[0]);
                    array.length > 1 && maxInput && (maxInput.value = array[1]);
                }

                let slider = new rSlider({
                    target,
                    values: {min, max},
                    step,
                    range: true,
                    tooltip: false,
                    set,
                    scale: false,
                    labels: false,
                    onChange: function (vals) {
                        setInputsValue(vals);
                    }
                });

                setInputsValue(slider.getValue());
            });
        } catch(error) {
            console.log('error', error);
        }

        

    (() => {
        try {
            const tabs = document.querySelectorAll('[data-js-tabs]');

            tabs.length && tabs.forEach((tab) => {
                const tabButtonItems = tab.querySelectorAll('[data-js-tab-button]');
                const tabContentItems = tab.querySelectorAll('[data-js-tab-content-item]');
                const matchType = tab.getAttribute('data-js-tabs');
                const itemClassDisplayNone = matchType === 'pc' ? (
                    'd-lg-none'
                ) : (
                    'd-none'
                );
                const itemClassDisplayBlock = matchType === 'pc' ? (
                    'd-lg-block'
                ) : (
                    'd-block'
                );
                

                const hideTabContent = () => {
                    tabContentItems.forEach((item) => {
                        item.classList.add(itemClassDisplayNone);
                        item.classList.remove(itemClassDisplayBlock);
                    });

                    tabButtonItems.forEach((tabButtonItem) => {
                        const items = tabButtonItem.parentNode.querySelectorAll('[data-js-toggle-class]');
                        items.forEach((item) => {
                            toggleHTMLClass({
                                element: item,
                                type: 'remove'
                            });
                        });
                    });
                }

                const showTabContent = (i) => {
                    const tabButtonElement = tabButtonItems[i];
                    const tabContentItemElement = tabContentItems[i];

                    
                    tabButtonElement && (
                        tabButtonElement.parentNode.querySelectorAll('[data-js-toggle-class]').forEach((item) => {
                            toggleHTMLClass({
                                element: item,
                                type: 'add'
                            })
                        })
                    )
                    
                    tabContentItemElement && tabContentItemElement.classList.add(itemClassDisplayBlock);
                    tabContentItemElement && tabContentItemElement.classList.remove(itemClassDisplayNone);
                }

                hideTabContent();
                showTabContent(0);

                tabButtonItems.forEach((tabButtonItem, index) => {
                    tabButtonItem.addEventListener('click', () => {
                        hideTabContent();
                        showTabContent(index);
                    });
                });
            });
        } catch(error) {
            console.log('error', error);
        }
    })();

        const checkForm = ({
            form,
            errorClassName = 'error',
        }) => {
            function validatInputs(){
                let inputs = [...form.querySelectorAll('[data-form-control][required]')];

                const toggleError = (element, className, type) => {
                    className = !className ? 'clr-unvalidate' : className;

                    if (element) {
                        const parent = element.closest('[data-form-control-parent]');
                        const errorElem = parent && parent.querySelector('[data-form-control-text]');
                        const inputOverlay = element.parentNode.querySelector('[data-js-form-control-overlay]');

                        type === 'add' && (
                            element.tagName === 'INPUT' ? (
                                element.classList.add('clr-unvalidate-br'),
                                inputOverlay && inputOverlay.classList.add('clr-unvalidate-br')
                            ) : (
                                element.classList.add(className)
                            ),
                            errorElem && errorElem.classList.add(className)
                        );

                        type === 'remove' && (
                            element.tagName === 'INPUT' ? (
                                element.classList.remove('clr-unvalidate-br'),
                                inputOverlay && inputOverlay.classList.remove('clr-unvalidate-br')
                            ) : (
                                element.classList.remove(className)
                            ),
                            errorElem && errorElem.classList.remove(className)
                        );
                    }
                }
                
                let valid = [];
                let radioCheck = false;
                let checkboxCheck = false;

                for(let i = 0; i < inputs.length; i++) {
                    const input = inputs[i];
                    const parent = input.closest('[data-js-radio-ischecked-next-inputs-validate]');

                    if (input.getAttribute('type') === 'radio') {
                        if (!input.checked && parent) {
                            const parentInputs = parent.querySelectorAll('[data-form-control]');
                            inputs = inputs.filter((item, index) => {
                                if (parentInputs[index]) {
                                    if (parentInputs[index] !== item) {
                                        return item;
                                    } else {
                                        return false;
                                    }
                                } else {
                                    return item;
                                }
                            });
                        }
                    }
                }

                inputs.forEach(function(i,j){
                    let checkAttr = '';
                    if(i.getAttribute('type')){
                        checkAttr = i.getAttribute('type');
                    }else{
                        checkAttr = i.tagName;
                    }
                    
                    switch(checkAttr){
                        case 'radio':
                            // console.log(i.checked);
                            if(!radioCheck){
                                const inputRadioName = i.getAttribute('name');
                                const radioArray = form.querySelectorAll(`input[name="${inputRadioName}"]`);
                                let someOneChecked = false;
                                

                                if (radioArray.length) {
                                    for(let i = 0; i < radioArray.length; i++) {
                                        if (radioArray[i].checked) {
                                            someOneChecked = true;
                                            break;
                                        }
                                    }
                                    
                                    if(!someOneChecked){
                                        // toggleError(i, false, 'add');
                                        radioCheck = false;
                                        valid.push (i);
                                        toggleError(i, false, 'add');
                                    }else{
                                        if (i.closest('[data-js-radio-text-input-validate]')) {
                                            
                                        }
                                    }
                                } else {
                                    if(!i.checked){
                                        console.log('radio unchekec');
                                        
                                        // toggleError(i, false, 'add');
                                        radioCheck = false;
                                        valid.push (i);
                                        toggleError(i, false, 'add');
                                    }else{
                                        // toggleError(i, false, 'remove');
                                        radioCheck = true;
                                        toggleError(i, false, 'remove');
                                    }
                                }
                            }
                        break;
                        case 'checkbox':
                            if(!checkboxCheck){
                                if(!i.checked){
                                    // toggleError(i, false, 'add');
                                    checkboxCheck = false;
                                    valid.push (i);
                                }else{
                                    // toggleError(i, false, 'remove');
                                    checkboxCheck = true;
                                }
                            }
                        break;
                        case 'text':
                            var _thisVal = i.value;
                            if(i.getAttribute('data-name') == 'name'){
                                if(!isNaN(i.value)){
                                    _thisVal = '';
                                }
                            }
                            if(_thisVal==''){
                                toggleError(i, false, 'add');
                                valid.push(i);
                            }else{
                                toggleError(i, false, 'remove');
                            }
                        break;
                        case 'tel':
                            if(i.value=='' || isNaN(i.value)){
                                toggleError(i, false, 'add');
                                valid.push(i);
                            }else{
                                toggleError(i, false, 'remove');
                            }
                        break;
                        case 'email':
                            var regEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                            if(i.value=='' || !regEmail.test(i.value)){
                                toggleError(i, false, 'add');
                                valid.push(i);
                            }else{
                                toggleError(i, false, 'remove');
                            }
                        break;
                        case 'select':
                            if(i[select.selectedIndex].value==''){
                                toggleError(i, false, 'add');
                                valid.push(i);
                            }else{
                                toggleError(i, false, 'remove');
                            }
                        break;
                        default:
                            if(i.value==''){
                                toggleError(i, false, 'add');
                                valid.push(i);
                            }else{
                                toggleError(i, false, 'remove');
                            }
                        break;
                    }
                });
                

                if(valid.length>0){
                    // console.log(valid.length);
                    return false;
                }else{
                    return true;
                }
                
            }

            if (form) {
                return validatInputs();
            }

            return false;
        }

        try {
            const progress = document.querySelector('[data-js-progress]');
            let activeProgressItemIndex = 0;


            const progressItemFooterPrevHTML = `
                <div class="pdl-15 pdr-15">
                    <button class="btn-reset d-block pdt-20 pdb-20" type="button" data-js-progress-footer-prev-button>
                        <span class="d-block fts-16 ftw-300 lh-1-1875 pdt-10 pdr-10 pdb-10 pdl-10 mrt-10- mrr-10- mrb-10- mrl-10-">Назад</span>
                    </button>
                </div>
            `;
            const progressItemFooterNextHTML = `
                <div class="pdl-15 pdr-15">
                    <button class="btn btn--default mnh-53 fts-14 ftw-500 pdl-16 pdr-16 pdt-5 pdb-5 w-100-p d-flex justify-content-center align-items-center brtlr-6 brtrr-6 brbrr-6 brblr-6 mnw-237 bxshw-accent-2" type="button" data-js-progress-footer-next-button>
                        <span class="d-flex justify-content-center align-items-center">
                            <span class="d-flex justify-content-center align-items-center mrl-9- mrr-9-">
                                <span class="pdl-9 pdr-9">
                                    <span class="d-block fts-15 ftw-500 ls-0-225-">Далее</span>
                                </span>
                            </span>
                        </span>
                    </button>
                </div>
            `;
            const progressItemFooterHTML = `
                <div class="d-flex justify-content-center flex-column flex-sm-row pdt-17 pdt-lg-30">
                    <div class="mrl-15- mrr-15- d-flex flex-wrap justify-content-center align-items-center" data-js-progress-item-footer-wrapper>
                        
                    </div>
                </div>
            `

            const addButtonHTMLAndGetProgressItemFooterBlockElement = (progressItemElement, progressItemIndex) => {

                const block = document.createElement('div');
                block.setAttribute('data-js-progress-item-footer', '');
                block.insertAdjacentHTML('afterbegin', progressItemFooterHTML);
                const footerWrapper = block.querySelector('[data-js-progress-item-footer-wrapper]');

                progressItemIndex === 0 && (
                    footerWrapper.insertAdjacentHTML('afterbegin', progressItemFooterNextHTML)
                );
                progressItemIndex > 0 && (
                    footerWrapper.insertAdjacentHTML('afterbegin', progressItemFooterNextHTML),
                    footerWrapper.insertAdjacentHTML('afterbegin', progressItemFooterPrevHTML)
                );

                progressItemElement.append(block);
            }

            if (progress) {
                const progressStartElement = progress.querySelector('[data-js-progress-start]');
                const progressFinishElements = progress.querySelectorAll('[data-js-progress-finish]');
                const progressWrapper = progress.querySelector('[data-js-progress-wrapper]');
                const progressCalculation = progress.querySelector('[data-js-progress-сalculation]');
                const progressCalculationOverlay = progress.querySelector('[data-js-progress-сalculation-overlay]');
                const progressCalculationPercent = progress.querySelector('[data-js-progress-сalculation-percent]');
                const progressItemsElements = progress.querySelectorAll('[data-js-progress-item]');
                
                if (progressItemsElements.length) {
                    const showActiveProgressItem = () => {
                        if (activeProgressItemIndex < progressItemsElements.length ) {
                            console.log('activeProgressItemIndex', activeProgressItemIndex);
                            console.log('progressItemsElements.length', progressItemsElements.length);
                            
                            const percent = activeProgressItemIndex === 0 ? (
                                5
                            ) : (
                                (100 / (progressItemsElements.length)) * activeProgressItemIndex
                            ).toFixed(0);
                            progressCalculationOverlay && (
                                progressCalculationOverlay.style.width = `${percent}%`
                            );
    
                            progressCalculationPercent && (
                                progressCalculationPercent.textContent = `${percent}%`
                            );
    
                            percent > 70 ? (
                                progressCalculation.classList.add('clr-white')
                            ) : (
                                progressCalculation.classList.remove('clr-white')
                            );
    
    
                            progressItemsElements.length && (
                                progressItemsElements.forEach((progressItem) => {
                                    progressItem.classList.add('d-none');
                                    progressItem.classList.remove('d-flex');
                                }),
                                progressItemsElements[activeProgressItemIndex].classList.remove('d-none'),
                                progressItemsElements[activeProgressItemIndex].classList.add('d-flex')
                            );
                        } else {
                            progressStartElement && progressStartElement.classList.add('d-none');
                            progressStartElement && progressStartElement.classList.remove('d-block');

                            console.log('progressFinishElements', progressFinishElements);
                            

                            progressFinishElements.forEach((progressFinishElement) => {
                                progressFinishElement.classList.add('d-block');
                                progressFinishElement.classList.remove('d-none');
                            });
                        }
                    }
        
                    showActiveProgressItem();

                    progressItemsElements.forEach((progressItemElement, index) => {
                        const firstRadio = progressItemElement.querySelector('[data-form-control][type="radio"]');
                        firstRadio && ( firstRadio.checked = true );
                        progressItemElement.setAttribute('data-fade-in', '');
                        addButtonHTMLAndGetProgressItemFooterBlockElement(progressItemElement, index);

                        const prevButton = progressItemElement.querySelector('[data-js-progress-footer-prev-button]');
                        const nextButton = progressItemElement.querySelector('[data-js-progress-footer-next-button]');

                        const number = progressItemElement.querySelector('[data-js-progress-number]');
                        number && ( number.textContent = `${index + 1}.` );
                        
                        prevButton && prevButton.addEventListener('click', () => {
                            activeProgressItemIndex !== 0 && activeProgressItemIndex > 0 && (
                                activeProgressItemIndex--
                            );
                            showActiveProgressItem();
                        });
                        
                        nextButton && nextButton.addEventListener('click', () => {
                            if (checkForm({
                                form: progressItemElement,
                                errorClassName: 'clr-accent'
                            })) {
                                activeProgressItemIndex < progressItemsElements.length && (
                                    activeProgressItemIndex++
                                );
                                showActiveProgressItem();
                            } else {
                            }
                        });
                    });
                }

                progressWrapper && progressWrapper.classList.add('vsb-visb', 'opc-1');
                progressWrapper && progressWrapper.classList.remove('vsb-hidd', 'opc-0');
            }
        } catch(error) {
            console.log('error', error);
            
        }
    })();

    (() => {
        try {
            const items = document.querySelectorAll('[data-js-button-input-change-item]');

            items.length && items.forEach((item) => {
                const buttons = item.querySelectorAll('[data-js-button-input-change]');
                const input = item.querySelector('[data-js-button-input-change-control]');

                const hideInfo = (i) => {
                    buttons.forEach((item) => {
                        item.classList.add('clr-secondary-2');
                        item.classList.remove('clr-accent');
                    });
                }

                const showActiveInfo = (i) => {
                    const button = buttons[i];

                    if (button) {
                        const name = button.getAttribute('data-js-input-name');
                        const placeholder = button.getAttribute('data-js-input-placeholder');

                        input.name = name;
                        input.placeholder = placeholder;

                        
                        button.classList.add('clr-accent');
                        button.classList.remove('clr-secondary-2');
                    }
                }

                hideInfo();
                showActiveInfo(0);

                buttons.forEach((buttons, index) => {
                    buttons.addEventListener('click', () => {
                        hideInfo();
                        showActiveInfo(index);
                    });
                });
            });
        } catch(error) {
            console.log('error', error);
        }
    })();

    (() => {
        try {
            /* This script supports IE9+ */
            (function() {
                /* Opening modal window function */
                function openModal() {
                    /* Get trigger element */
                    var modalTrigger = document.getElementsByClassName('jsModalTrigger');
            
                    /* Set onclick event handler for all trigger elements */
                    for(var i = 0; i < modalTrigger.length; i++) {
                            modalTrigger[i].onclick = function(event) {
                                event.preventDefault();
                            var target = this.getAttribute('href').substr(1);
                            var modalWindow = document.getElementById(target);
                
                            modalWindow.classList.add('opc-1', 'vsb-visb');
                            modalWindow.classList.remove('opc-0', 'vsb-hidd');
                                
                            document.body.style.overflow = 'hidden';
                            document.body.style.marginRight = getScrollbarWidth() + 'px';
                        }
                    }   
                }
            
                function closeModal(){
                /* Get close button */
                var closeButton = document.getElementsByClassName('jsModalClose');
                var closeOverlay = document.getElementsByClassName('jsOverlay');
            
                /* Set onclick event handler for close buttons */
                    for(var i = 0; i < closeButton.length; i++) {
                        closeButton[i].addEventListener('click', (event) => {
                            var modalWindow = event.currentTarget.closest('[data-js-modal]');

                            modalWindow && modalWindow.classList.remove('opc-1', 'vsb-visb');
                            modalWindow && modalWindow.classList.add('opc-0', 'vsb-hidd');
                                
                            document.body.style.overflow = 'visible';
                            document.body.style.marginRight = 0;
                        });
                    }
            
                /* Set onclick event handler for modal overlay */
                    for(var i = 0; i < closeOverlay.length; i++) {
                        closeOverlay[i].addEventListener('click', (event) => {
                            var modalWindow = event.currentTarget.closest('[data-js-modal]');

                            modalWindow && modalWindow.classList.remove('opc-1', 'vsb-visb');
                            modalWindow && modalWindow.classList.add('opc-0', 'vsb-hidd');
                                
                            document.body.style.overflow = 'visible';
                            document.body.style.marginRight = 0;
                        });
                    }  
            
                }
            
                /* Handling domready event IE9+ */
                function ready(fn) {
                if (document.readyState != 'loading'){
                    fn();
                } else {
                    document.addEventListener('DOMContentLoaded', fn);
                }
                }
            
                /* Triggering modal window function after dom ready */
                ready(openModal);
                ready(closeModal);
            }());
        } catch(error) {
            console.log('error', error);
        }
    })();

    const checkFormControlLength = () => {
        const formControls = [
            ...document.querySelectorAll('input'),
            ...document.querySelectorAll('textarea'),
        ];

        const check = (control) => {
            control && (
                control.value.length > 0 ? (
                    control.classList.add('cpltd')
                ) : (
                    control.classList.remove('cpltd')
                )
            )
        }

        formControls && formControls.length && formControls.forEach((formControl) => {
            formControl.addEventListener('keyup', () => {
                check(formControl);
            });
            formControl.addEventListener('scroll', (event) => {
                const label = event.target && event.target.parentNode.querySelector('[data-js-form-control-label]')

                event.target.scrollTop ? (
                    label && ( label.style.opacity = '0' )
                ) : (
                    label && ( label.style.opacity = '1' )
                );
            });
            check(formControl);
        });
    }

    // checkFormControlLength();

    const getScrollbarWidth = () => {
        let div = document.createElement('div');
    
        div.style.visibility = 'hidden';
        div.style.position = 'absolute';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
    
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
    
        return scrollWidth;
    }

    (() => {
        try {
            const nav = document.getElementById('nav'),
            overlay = document.getElementById('overlay'),
            open = document.getElementById('hamburger'),
            close = document.getElementById('close');
        

            const navOpen = () => {
                nav && (
                    nav.classList.remove('l-nav-w-'),
                    nav.classList.add('l-nav-w')
                );
                overlay && (
                    overlay.classList.remove('opc-0'),
                    overlay.classList.remove('vsb-hidd'),
                    overlay.classList.add('opc-0-2'),
                    overlay.classList.add('vsb-vsb')
                );
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = getScrollbarWidth() + 'px';
            }

            const navClose = () => {
                nav && (
                    nav.classList.remove('l-nav-w'),
                    nav.classList.add('l-nav-w-')
                );
                overlay && (
                    overlay.classList.remove('opc-0-2'),
                    overlay.classList.remove('vsb-vsb'),
                    overlay.classList.add('opc-0'),
                    overlay.classList.add('vsb-hidd')
                );
                setTimeout(() => {
                    document.body.style.overflow = 'initial';
                    document.body.style.marginRight = '0';
                }, 100);
            }

            open && open.addEventListener('click', navOpen);
            close && close.addEventListener('click', navClose);
            overlay && overlay.addEventListener('click', navClose);
        } catch(error) {
            console.log('error', error);
        }
    })();

    (() => {
        try {
            const toggleHTMLClass = ({
                element,
                onlyThisElements = [],
                type = '',
                checkHasActiveClass = false
            }) => {
            
                let arrayElements = [];
            
                console.log('onlyThisElements', onlyThisElements);
                console.log('elementonlyThisElements', element);
            
                if (element || onlyThisElements.length) {
                    const type = element && element.getAttribute('data-js-toggle-class-type') || onlyThisElements[0] && onlyThisElements[0].getAttribute('data-js-toggle-class-type');
            
                    if (type) {
                        arrayElements = document.querySelectorAll(`[data-js-toggle-class-type="${type}"]`);
                    } else {
                        console.log('element', element);
                        arrayElements =
                            element &&
                            element.parentElement.querySelectorAll('[data-js-toggle-class]'
                        );
                    }
                }
            
                console.log('arrayElements', arrayElements);
            
                if (checkHasActiveClass && onlyThisElements.length) {
                    let result = false;
            
                    onlyThisElements = (
                        onlyThisElements[0].getAttribute('data-js-toggle-class-type') &&
                        document.querySelectorAll(`[data-js-toggle-class-type="${onlyThisElements[0].getAttribute('data-js-toggle-class-type')}"]`)
                    ) || onlyThisElements;
            
                    console.log('123 onlyThisElements', onlyThisElements);
            
                    onlyThisElements.forEach((element) => {
                        if (element) {
                            const classes = element && element.getAttribute('data-js-toggle-class');
                            const classesArray = classes && classes.split(',');
                    
                            if (classesArray && classesArray.length) {
                                const toggleValues = classesArray[0].split('>');
                
                                if (
                                    toggleValues &&
                                    toggleValues.length &&
                                    (
                                        element.classList.contains(toggleValues[1]) || element.hasAttribute('data-js-toggle-active')
                                    )
                                ) {
                                    result = true;
                                }
                            }
                        }
                    });
            
                    console.log('123 onlyThisElements result', result);
            
                    return result;
                }
            
                const changeClassValueElements = (classValueElements) => {
                    classValueElements && classValueElements.length && classValueElements.forEach((classValueElement) => {
                        const classes = classValueElement.getAttribute('data-js-toggle-class');
                        const classesArray = classes && classes.split(',');
            
                        console.log('javascript test', type);
            
                        classesArray && classesArray.length && classesArray.forEach((classItem) => {
                            const toggleValues = classItem.split('>');
            
                            if (toggleValues.length === 2) { 
            
                                if (type === 'remove') {
                                    if (toggleValues[0] === '' || toggleValues[0] === ' ') {
                                        classValueElement.classList.remove(toggleValues[1]);
                                    } else {
                                        if (classValueElement.classList.contains(toggleValues[1])) {
                                            classValueElement.classList.remove(toggleValues[1]);
                                            classValueElement.classList.add(toggleValues[0]);
                                        }
                                    }
                                }
            
                                if (type === 'add') {
                                    if (toggleValues[0] === '' || toggleValues[0] === ' ') {
                                        classValueElement.classList.add(toggleValues[1]);
                                    } else {
                                        if (classValueElement.classList.contains(toggleValues[0])) {
                                            classValueElement.classList.remove(toggleValues[0]);
                
                                            classValueElement.classList.add(toggleValues[1]);
                                        }
                                    }
                                }
                            }
                        });
                    });
                }
            
                changeClassValueElements(arrayElements);
            }

            const togglesItemContainers = document.querySelectorAll('[data-js-toggle]');

            togglesItemContainers.forEach((togglesItemContainer) => {
                
                const toggleButtons = togglesItemContainer.querySelectorAll('[data-js-toggle-button]');

                toggleButtons.forEach((toggleButton) => {
                    toggleButton.addEventListener('click', (event) => {
                        const _this = event.currentTarget;

                        const parent = _this.closest('[data-js-toggle-button-parent]');
                        const block = parent && parent.querySelector('[data-js-toggle-block]');
                        const toggleClassElements = parent && parent.querySelectorAll('[data-js-toggle-class]');

                        if (!block.classList.contains('active')) {
      
                            block.classList.add('active');
                            block.style.height = 'auto';
                      
                            var height = block.clientHeight + 'px';
                      
                            block.style.height = '0px';

                            
                            toggleClassElements.forEach((toggleClassElement) => {
                                toggleHTMLClass({
                                    element: toggleClassElement,
                                    type: 'add'
                                });
                            });
                      
                            setTimeout(function () {
                                block.style.height = height;
                            }, 0);
                            
                          } else {
                            
                            block.style.height = '0px';

                            
                            toggleClassElements.forEach((toggleClassElement) => {
                                toggleHTMLClass({
                                    element: toggleClassElement,
                                    type: 'remove'
                                });
                            });
                      
                            block.addEventListener('transitionend', function () {
                                block.classList.remove('active');
                            }, {
                              once: true
                            });
                            
                          }
                    });
                });
            });
        } catch(error) {
            console.log('error', error);
        }
    })();
    var carouselProductThumbnails = new Swiper(".carouselProductThumbnails", {
        loop: false,
        freeMode: true,
        watchSlidesProgress: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 7,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        }
      });
      var carouselProduct = new Swiper(".carouselProduct", {
        loop: true,
        effect: 'fade',
        speed: 500,
        spaceBetween: 10,
        navigation: {
          nextEl: "",
          prevEl: "",
        },
        thumbs: {
          swiper: carouselProductThumbnails,
        },
      });
    const carouseIntro = new Swiper(".carouseIntro", {
        spaceBetween: 30,
        effect: "fade",
        speed: 500,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 3000000,
            disableOnInteraction: false,
        },
        loop: true
    });
    const carouseExampleOfOurWorks = new Swiper('.carouseExampleOfOurWorks', {
        loop: false,
        spaceBetween: 0,
        navigation: {
            nextEl: '',
            prevEl: '',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 'auto',
            },
            992: {
                slidesPerView: 4,
            },
            1280: {
                slidesPerView: 4,
            },
        }
    });
    const carouseFacades = new Swiper('.carouseFacades', {  
        loop: false,
        spaceBetween: 0,
        navigation: {
            nextEl: '',
            prevEl: '',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 'auto',
            },
            992: {
                slidesPerView: 4,
            },
            1280: {
                slidesPerView: 6,
            },
        }
    });
    const carouselManufacturers = new Swiper('.carouselManufacturers', {  
        slidesPerView: 'auto',
        loop: false,
        spaceBetween: 0,
        navigation: {
        nextEl: '',
        prevEl: '',
    },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    const carouseProducts = new Swiper('.carouseProducts', {  
        loop: false,
        navigation: {
        nextEl: '',
        prevEl: '',
    },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 'auto',
            },
            992: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 4,
            },
        }
    });
    const carouselReviews = new Swiper('#carouselReviews', {            
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: false,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            0: {
                slidesPerView: 'auto',
            },
            992: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 4,
            },
        }
    });

    try {
        class SelectBox 
            {
                constructor(selector, settings)
                {
                    this.selector = selector;
                    this.settings = settings || {};
                    this.init();
                }
                
                init()
                {
                    this.inputLabel = this.selector.dataset.selectboxLabel || false;
                    let get_options = this.selector.querySelectorAll('option');
                    this.id = Math.floor(Math.random() * 1000000);
                    
                    this.selector.dataset.selectboxId = this.id;
                    
                    this.options = [];
                    this.callbacks = {};
                    
                    if(this.settings.on){
                        this.callbacks = this.settings.on;
                    }
                    
                    if(get_options)
                    {
                        get_options.forEach(function(option){
                            this.options.push({
                                value: option.value || option.innerHTML,
                                label: option.innerHTML,
                                selected: option.selected || false,
                                disabled: option.disabled || false
                            });
                            
                            if(option.selected)
                            {
                                this.selectedOption = {
                                    value: option.value || option.innerHTML,
                                    label: option.innerHTML,
                                    selected: true
                                };
                            }
                        }.bind(this));
                    }
                    
                    if(this.options.length)
                    {
                        this.render();
                        this.initTargets();
                        this.initEvents();
                    }
                }
                
                render()
                {
                    let _items_html = '';
                        
                    this.options.map(function(item){
                        let _item_classes = ['selectbox_list_item tra-0-3s-ease'];

                        if(item.selected){
                            _item_classes.push('selected');
                        }
                        
                        if(item.disabled){
                            _item_classes.push('disabled');
                        }
                        
                        _items_html += `<li class="${_item_classes.join(' ')}" data-value="${item.value}" data-disabled="${item.disabled ? 1 : 0}">${item.label}</li>`;
                        return item;
                    });

                    let _selected = this.selectedOption || this.options[0];

                    let _html = `
                        <div class="selectbox_wrapper" id="selectbox_${this.id}">
                            <div class="selectbox_input p-rel mnh-42 mnh-lg-60 br-0 w-100-p pdl-59 pdr-54 br-0 bg-tra brtlr-8 brtrr-8 brbrr-8 brblr-8 clr-black-2 p-rel z-i-10 aprc-none fts-10 fts-lg-14 ftw-300 d-flex align-items-center">
                                ${this.inputLabel ? `<span class="selectbox_input_label mnw-0">${this.inputLabel}</span>` : ''}					
                                <span class="selectbox_input_value" data-value="${_selected.value}">${_selected.label}</span>
                                
                                <span class="d-block bg-clr-secondary-9 w-100-p h-100-p p-abs l-0 t-0 r-0 b-0 z-i-1- brtlr-8 brtrr-8 brbrr-8 brblr-8 brw-2-f tra-0-2s-ease" data-js-form-control-overlay></span>
                                <span class="d-flex align-items-center p-abs l-19 t-0 b-0">
                                    <i class="icon-gift fts-24 clr-secondary-10"></i>
                                </span>
                                <span class="d-flex align-items-center p-abs r-21 t-0 b-0 tra-0-3s-ease" data-js-select-arrow>
                                    <i class="icon-arrow-bottom fts-16 fts-lg-19 clr-secondary-2"></i>
                                </span>
                            </div>
                            <ul class="selectbox_list text-left bg-clr-secondary-9 brtlr-8 brtrr-8 brbrr-8 brblr-8 tra-0-2s-ease">${_items_html}</ul>
                        </div>
                        `;

                    this.selector.insertAdjacentHTML('afterEnd', _html);
                    this.selector.style.display = 'none';
                }
                
                initTargets()
                {
                    this.selectBox = this.selector.nextElementSibling;
                    this.selectBoxInput = this.selectBox.querySelector('.selectbox_input');
                    this.selectBoxInputValue = this.selectBoxInput.querySelector('.selectbox_input_value');
                    this.selectBoxList = this.selectBox.querySelector('.selectbox_list');
                    this.selectBoxListItems = this.selectBoxList.querySelectorAll('.selectbox_list_item');
                }
                
                initEvents()
                {
                    this.selectBoxInput.addEventListener('click', this.onClick.bind(this));
                        
                    this.selectboxOpenEvent = new CustomEvent('selectbox_open');
                    this.selectBox.addEventListener('selectbox_open', this.onOpen.bind(this), false);
                    
                    this.selectboxCloseEvent = new CustomEvent('selectbox_close');
                    this.selectBox.addEventListener('selectbox_close', this.onClose.bind(this), false);
                    
                    document.addEventListener('click', function(e){
                        if(!e.target.closest(`#selectbox_${this.id}`)){
                            this.selectBox.classList.remove('selectbox_open');
                        }
                    }.bind(this));
                    
                    this.selectBoxListItems.forEach(function(item){
                        item.addEventListener('click', this.onSelect.bind(this));
                    }.bind(this));
                }
                
                onClick(e)
                {
                    e.preventDefault();
                    this.selectBox.dispatchEvent(this.selectboxOpenEvent);
                }
                
                onOpen()
                {
                    this.selectBox.classList.add('selectbox_open');
                    
                    if(this.callbacks.open && typeof(this.callbacks.open) == 'function'){
                        this.callbacks.open.call(this);
                    }
                    
                    //this.setDirection();
                }
                
                setDirection()
                {
                    let _max = window.getComputedStyle(this.selectBoxList).getPropertyValue('max-height');
                    _max = parseInt(_max);

                    let _min = window.innerHeight - (this.selectBox.offsetTop + this.selectBox.offsetHeight);

                    if(!isNaN(_max) && _min < _max){
                        this.selectBox.classList.add('selectbox_direction_bottom');
                    }else{
                        this.selectBox.classList.remove('selectbox_direction_bottom');
                    }
                }
                
                onClose()
                {
                    this.selectBox.classList.remove('selectbox_open');
                    
                    if(this.callbacks.close && typeof(this.callbacks.close) == 'function'){
                        this.callbacks.close.call(this);
                    }
                }
                
                onSelect(e)
                {
                    e.preventDefault();
                    
                    if(parseInt(e.target.dataset.disabled)){
                        return;
                    }
                    
                    this.selectBoxInputValue.innerHTML = e.target.innerHTML;
                    this.selectBoxInputValue.dataset.value = e.target.dataset.value;
                    
                    this.selector.value = e.target.dataset.value;
                    this.selector.dispatchEvent(new Event('change'));
                    
                    this.selectBoxListItems.forEach(function(el){
                        el.classList.remove('selected');
                    });
                    
                    e.target.classList.add('selected');
                    
                    if(this.callbacks.select && typeof(this.callbacks.select) == 'function')
                    {
                        this.callbacks.select.call(this, {
                            value: e.target.dataset.value,
                            label: e.target.innerHTML
                        });
                    }
                    
                    this.selectBox.dispatchEvent(this.selectboxCloseEvent);
                }
            }

            let boxes = document.querySelectorAll('[data-selectbox]');

            if(boxes)
            {
                boxes.forEach(function(el){
                    if(el.matches('select'))
                    {
                        let _sb = new SelectBox(el, {
                            on: {
                                open: function(){
                                    console.log('open box');
                                },
                                close: function(){
                                    console.log('close box');
                                },
                                select: function(option){
                                    console.log('select box', option.value);
                                }
                            }
                        });
                    }
                });
            }
    } catch(error) {
        console.log('error', error);
        
    }

    (() => {
        try {
            const counters = document.querySelectorAll('[data-js-pm-counter]');

            counters.length && counters.forEach((counter) => {
                const minusButton = counter.querySelector('[data-js-pm-counter-minus-button]');
                const plusButton = counter.querySelector('[data-js-pm-counter-plus-button]');
                const input = counter.querySelector('[data-js-pm-counter-input]');

                if (minusButton && plusButton && input) {
                    input.value === '' && ( input.value = 0 );
                    let inputValue = +(input.value);

                    input.addEventListener('keyup', (e) => {
                        if (
                            (
                                e.target.value.match(/^\d+$/)
                            ) || (
                                e.key == 'Backspace'
                            )
                        ) {
                            inputValue = +e.target.value;
                        } else {
                            input.value = inputValue
                        }
                    });

                    minusButton.addEventListener('click', () => {

                        inputValue <= 0 ? (
                            input.value = 0
                        ) : (
                            input.value = --inputValue
                        );
                    });

                    plusButton.addEventListener('click', () => {
                        input.value = ++inputValue;
                    });
                }
            });
        } catch(error) {
            console.log('error', error);
        }
    })();
});