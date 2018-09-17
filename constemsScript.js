//alert("meeeee");
$(document).ready(function(){
    animateDiv('#male_abhishek');animateDiv('#female_vani');
    animateDiv('#male_ayush');animateDiv('#male_udit');animateDiv('#male_himanshu'); animateDiv('#female_priya');animateDiv('#female_rashmi');
    animateDiv('#male_pranay');animateDiv('#female_manu');
    animateDiv('#male_ajeet');animateDiv('#male_upendra');
    animateDiv('#male_anchal');animateDiv('#male_gaurav');
    animateDiv('#male_naman');animateDiv('#female_prachi');
    animateDiv('#female_mannat'); animateDiv('#female_anjali');
    animateDiv('#female_pratiksha'); animateDiv('#female_riya');
    animateDiv('#female_anupriya'); animateDiv('#female_gauri');animateDiv('#female_shilpi');
    animateDiv('#female_divya');animateDiv('#male_rajat');
    animateDiv('#male_somesh');animateDiv('#male_suyash');
});

function makeNewPosition(){ 
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;  
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);  
    return [nh,nw];       
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 22900,   function(){
        animateDiv(myclass);        
    });   
};

$(document).ready(function(){
        var count=0;
        var x = $(".box").position();//geting position of box
        var leftOfBox = x.left;
        //var topOfBox = x.top;  
        var uditPos= $("#male_udit").position();//geting position of dot
        var uditLeft = uditPos.left;
        //var uditTop = uditPos.top;
        $("#male_udit").find(".coordinates").text(uditLeft);
        var dt = new Date();
        var uditTime = dt.getHours() + ":" + dt.getMinutes(); 
        $("#male_udit").find(".timestamp").text(uditTime);
        $(".inside_count").text(count);
        $(".outside_count").text("50");
        /*if(leftOfBox.equals(100)){
            $(".udit_male").find("gender").text("MALE");
           }*/
        
    });