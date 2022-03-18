
        //pour redemarrer le jeu
        function restart(){
            location.reload();
        }
        $(document).ready(function(){
            $("#restart").on("click",restart);
        });

        //pour afficher le score
        function showScore(){
            if(answeredQuestions()[0]<7 && answeredQuestions()[1]<7 && answeredQuestions()[2]<7 ){
                alert('You should answer at least 7 questions at each quiz');
            }else{
                rpns=checkForms();
                alert('Votre score est de : ' + (rpns[0]+rpns[1]+rpns[2]+score));
                location.reload();   
            }     
        }
        $(document).ready(function(){
            $("#showScore").on("click",showScore);
        });

    function showForm(formId){
        var form=document.getElementById(formId);
        if (form.style.display=='none' || form.style.display==''){
            form.style.display='block';
        }else{
            form.style.display='none';
        }
    }
    var score=0;
    function showAnswer(formtype,question_id){
        var qst_id =parseInt(question_id.substring(1),10)-1;
        if(formtype=='css'){
            qst_id+=10
        }
        if(formtype=='javascript'){
            qst_id+=20
        }
        var qst = document.getElementsByClassName("qst")[qst_id]
        for(var i=5;i<qst.childNodes.length;i=i+3){

            if(formtype=='html' && qst.childNodes[i].id==firstquizanswers[question_id]){
                qst.childNodes[i].checked=true;
                score--;
                break;
            }
            if (formtype=='css' && qst.childNodes[i].id==secondquizanswers[question_id]){
                qst.childNodes[i].checked=true;
                score--;
                break;
            }
            if (formtype=='javascript' && qst.childNodes[i].id==thirdquizanswers[question_id]){
                qst.childNodes[i].checked=true;
                score--;
                break;
            }
        }
        for(var i=5;i<qst.childNodes.length;i=i+3){
            qst.childNodes[i].disabled=true;
        }
        qst.childNodes[14].disabled='true';
    }


    var question_ids=["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"]; 
    function checkForms(){ 
        var counter=[0,0,0];
        for(var x=0;x<question_ids.length;x++){
            var qst_id =parseInt(question_ids[x].substring(1),10)-1; 
            
            var qst = document.getElementsByClassName("qst")[qst_id];
            var firstChoice=document.getElementsByClassName("qst")[qst_id].childNodes[5];
            var secondChoice=document.getElementsByClassName("qst")[qst_id].childNodes[8];
            var thirdChoice=document.getElementsByClassName("qst")[qst_id].childNodes[11];
             
            if((firstChoice.checked && firstquizanswers[question_ids[x]]==1) ||(secondChoice.checked && firstquizanswers[question_ids[x]]==2) || (thirdChoice.checked && firstquizanswers[question_ids[x]]==3)){
                counter[0]++;
            }   
            qst_id+=10;   
            firstChoice=document.getElementsByClassName("qst")[qst_id].childNodes[5];
            secondChoice=document.getElementsByClassName("qst")[qst_id].childNodes[8];
            thirdChoice=document.getElementsByClassName("qst")[qst_id].childNodes[11];
            qst = document.getElementsByClassName("qst")[qst_id];
  
            if((firstChoice.checked && secondquizanswers[question_ids[x]]==1) || (secondChoice.checked && secondquizanswers[question_ids[x]]==2) || (thirdChoice.checked && secondquizanswers[question_ids[x]]==3)){
                
                counter[1]++;
            }
   
            qst_id+=10;
            firstChoice=document.getElementsByClassName("qst")[qst_id].childNodes[5];
            secondChoice=document.getElementsByClassName("qst")[qst_id].childNodes[8];
            thirdChoice=document.getElementsByClassName("qst")[qst_id].childNodes[11];
            qst = document.getElementsByClassName("qst")[qst_id];
            
                if((firstChoice.checked && thirdquizanswers[question_ids[x]]==1) || (secondChoice.checked && thirdquizanswers[question_ids[x]]==2) || (thirdChoice.checked && thirdquizanswers[question_ids[x]]==3)){
                    counter[2]++;
                } 
            }   
        return counter;
    }

    function answeredQuestions(){
        var answeredquestions=[0,0,0];
        for(var x=0;x<question_ids.length;x++){
            var qst_id =parseInt(question_ids[x].substring(1),10)-1; 
            var qst = document.getElementsByClassName("qst")[qst_id];
             var firstChoice=document.getElementsByClassName("qst")[qst_id].childNodes[5];
             var secondChoice=document.getElementsByClassName("qst")[qst_id].childNodes[8];
             var thirdChoice=document.getElementsByClassName("qst")[qst_id].childNodes[11];
             if(firstChoice.checked || secondChoice.checked || thirdChoice.checked)
             {
                 answeredquestions[0]++;
             }
            qst_id+=10;
            firstChoice=document.getElementsByClassName("qst")[qst_id].childNodes[5];
            secondChoice=document.getElementsByClassName("qst")[qst_id].childNodes[8];
            thirdChoice=document.getElementsByClassName("qst")[qst_id].childNodes[11];
            qst = document.getElementsByClassName("qst")[qst_id];
            if(firstChoice.checked || secondChoice.checked || thirdChoice.checked)
             {
                 answeredquestions[1]++;
             }
            qst_id+=10;
            firstChoice=document.getElementsByClassName("qst")[qst_id].childNodes[5];
            secondChoice=document.getElementsByClassName("qst")[qst_id].childNodes[8];
            thirdChoice=document.getElementsByClassName("qst")[qst_id].childNodes[11];
            qst = document.getElementsByClassName("qst")[qst_id];
            if(firstChoice.checked || secondChoice.checked || thirdChoice.checked)
             {
                 answeredquestions[2]++;
             }
        }
        return answeredquestions;

    }
    document.addEventListener('keydown', function(event) {        
    if(event.keyCode == 83) {
        if(answeredQuestions()[0]<7 && answeredQuestions()[1]<7 && answeredQuestions()[2]<7 ){
            alert('Veuillez répondre au moins à 7 questions pour chaque categorie');
        }else{
            rpns=checkForms();
            alert('Votre score est de : ' + (rpns[0]+rpns[1]+rpns[2]+score));
            location.reload();   
        }     
    }
    }); 
