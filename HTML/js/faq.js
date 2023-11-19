
                var i;
                var acc = document.getElementsByClassName("faqButton");

                for(i = 0; i < acc.length; i++)
                {
                    acc[i].addEventListener("click",function() {
                        this.classList.toggle("active");
                        var answer = this.nextElementSibling;
                       if(answer.style.maxHeight)
                       {
                        answer.style.maxHeight = null;
                       }
                       else
                       {
                        answer.style.maxHeight = answer.scrollHeight + "px";
                       }
                       
                    });
                }


               /*https://www.w3schools.com/howto/howto_js_accordion.asp*/