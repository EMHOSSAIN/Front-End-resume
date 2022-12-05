$(document).ready (function(){
    $('#profile_riples').ripples({
        resolution:512,
        dropRadius:10
    })
    const bars = document.querySelectorAll('.progress_bar');

    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0]
        tooltip.innertext=percentage + '%';
        bar.style.width=percentage + '%'
    })

    const counters = document.querySelectorAll('.counter');

    function runcounter (){
        counters.forEach(counter=>{
            counter.innertext=0;
            let target= +counter.dataset.count;
            let step = target/ 100;

            let countIt = function(){
                let displayCount=+counter.innertext;

                if(displayCount < target){
                    counter.innertext= Math.cell(displayCount + step);
                   setTimeout(countIt, 1)
                }
                else{
                    counter.innertext=target
                }
            }
            countIt()
        })


    }
  
    let option={
        rootmargin: '0px 0px -200px 0px'
    }
    let done = 0;

    let counterSection = document.querySelectorAll('.counter_section');
    const sectionObserverver = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting && !done==1){
            done = 1;
            runcounter()

        }
    } .option)
    sectionObserverver.observe(counterSection)
})