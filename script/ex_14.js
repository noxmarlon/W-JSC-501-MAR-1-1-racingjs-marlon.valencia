window.onload = function () {
    var input = document.getElementsByTagName("input")[0];
    var output = document.getElementsByTagName("div")[3];
    
        function escapeHtml(text) {
          return text
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
    }
        input.oninput = function() {
            var str = input.value;
            var fuera = escapeHtml(str);
            fuera = fuera.replace(/\[B\]/g,"<b>");
            fuera = fuera.replace(/\[\/B\]/g,"</b>");
            fuera = fuera.replace(/\[S\]/g,"<del>");
            fuera = fuera.replace(/\[\/S\]/g,"</del>");
            fuera = fuera.replace(/\[U\]/g,"<u>");
            fuera = fuera.replace(/\[\/U\]/g,"</u>");
            fuera = fuera.replace(/\[\/COLOR\]/g,"</span>");
            fuera = fuera.replace(/\[\/LINK\]/g,"</a>");
            var fuera_res = [];
            var fuera_tmp = fuera.split("");
            var k = 0;
            for (i = 0; i < fuera_tmp.length; i++) {
                if (fuera_tmp[i] == "[" && fuera_tmp[i+1] == "C" && fuera_tmp[i+2] == "O" && fuera_tmp[i+3] == "L"
                    && fuera_tmp[i+4] == "O" && fuera_tmp[i+5] == "R" && fuera_tmp[i+6] == "=" && fuera_tmp[i+7] == "&" && fuera_tmp[i+8] == "l" && fuera_tmp[i+9] == "t" && fuera_tmp[i+10] == ";") {
    
                    fuera_res[i] = "["; fuera_res[i+1] = "C"; fuera_res[i+2] = "O"; fuera_res[i+3] = "L";
                    fuera_res[i+4] = "O"; fuera_res[i+5] = "R"; fuera_res[i+6] = "="; fuera_res[i+7] = "<"; 
                    for (j = i+10; j < fuera_tmp.length && !(fuera_tmp[j+1] == "&" && fuera_tmp[j+2] == "g" && fuera_tmp[j+3] == "t" && fuera_tmp[j+4] == ";" && fuera_tmp[j+5] == "]"); j++) {
                        fuera_res[j-2] = fuera_tmp[j+1];
                    }
                    if (j < fuera_tmp.length && (fuera_tmp[j+1] == "&" && fuera_tmp[j+2] == "g" && fuera_tmp[j+3] == "t" && fuera_tmp[j+4] == ";" && fuera_tmp[j+5] == "]")) {
                            fuera_res[j+1] = ">";
                            fuera_res[j+2] = "]";
                            fuera_res = fuera_res.join("");
                            var value = fuera_res.slice(8, fuera_res.length - 2);
                            fuera = fuera.replace("[COLOR=&lt;" + value + "&gt;]", "<span style=color:" + value + ">");
                            fuera_res = fuera_res.split("");
                            fuera_res = [];
                            k = 0;
                            j=0;
                    }
                    else {
                            fuera_res = [];
                            k = 0;
                            i=0;
                            j=0;
                    }
                }
                else if (fuera_tmp[i] == "[" && fuera_tmp[i+1] == "L" && fuera_tmp[i+2] == "I" && fuera_tmp[i+3] == "N"
                    && fuera_tmp[i+4] == "K" && fuera_tmp[i+5] == "=" && fuera_tmp[i+6] == "&" && fuera_tmp[i+7] == "l" && fuera_tmp[i+8] == "t" && fuera_tmp[i+9] == ";") {
    
                    fuera_res[i] = "["; fuera_res[i+1] = "L"; fuera_res[i+2] = "I"; fuera_res[i+3] = "N";
                    fuera_res[i+4] = "K"; fuera_res[i+5] = "="; fuera_res[i+6] = "<"; 
                    for (j = i+9; j < fuera_tmp.length && !(fuera_tmp[j+1] == "&" && fuera_tmp[j+2] == "g" && fuera_tmp[j+3] == "t" && fuera_tmp[j+4] == ";" && fuera_tmp[j+5] == "]"); j++) {
                        fuera_res[j-2] = fuera_tmp[j+1];
                    }
                    if (j < fuera_tmp.length && (fuera_tmp[j+1] == "&" && fuera_tmp[j+2] == "g" && fuera_tmp[j+3] == "t" && fuera_tmp[j+4] == ";" && fuera_tmp[j+5] == "]")) {
                            fuera_res[j+1] = ">";
                            fuera_res[j+2] = "]";
                            fuera_res = fuera_res.join("");
                            var value = fuera_res.slice(7, fuera_res.length - 2);
                            fuera = fuera.replace("[LINK=&lt;" + value + "&gt;]", "<a href=\"" + value + "\">");
                            fuera_res = fuera_res.split("");
                            fuera_res = [];
                            k = 0;
                            j=0
                    }
                    else {
                            fuera_res = [];
                            k = 0;
                            j=0;
                    }
                }
            }
            output.innerHTML = fuera;
        }
    }