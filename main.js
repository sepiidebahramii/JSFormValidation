function Persian(event)
{
    var p = /^[\u0600-\u06FF\s]*$/; // just persian characters and space
    if (!p.test(event))
        return false; // not persian
    return true;
}
function English(event)
{
    var p = /^[a-z ]*$/i; // just english characters and space
    if (!p.test(event))
        return false; // not english
    return true;
}
function Validate_Email(event) 
{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(event))
        return (true) // if email is valid
    return (false)
}

function Validate_Form() 
{
    // var selectedGender= null;
    // for (var i=0; i < document.getElementsByName("uiGender").length; i++) 
    // {
    //     if (document.getElementsByName("uiGender")[i].checked) {
    //         selectedGender = document.getElementsByName("uiGender")[i].value;
    //     }
    // }
    var error = 0;
    //-------------------------------------------------------------------------------------------------------------------
    var t = document.getElementsByName("Title")[0];
    var title = t.options[t.selectedIndex].value;
    document.getElementById('error1').innerHTML = "";
    if (title == -1)
    {
        error++;
        document.getElementById('error1').innerHTML = "لطفا عنوان متناسب با خود را انتخاب کنید <br/>";
    }
    //-------------------------------------------------------------------------------------------------------------------
    var pr_name = document.forms["form"]["PR_Name"].value;
    document.getElementById('error2').innerHTML = "";
    if (pr_name == "")
    {
        error++;
        document.getElementById('error2').innerHTML = "لطفا نام خود را وارد کنید <br/>";
    }
    else if ((pr_name.length < 3 || pr_name.length > 50) && Persian(pr_name))
    {
        error++;
        document.getElementById('error2').innerHTML = "تعداد کاراکترها باید بین 3 تا 50 باشد <br/>";
    }
    else if ((pr_name.length >= 3 && pr_name.length <= 50) && !Persian(pr_name))
    {
        error++;
        document.getElementById('error2').innerHTML = "لطفا تنها کاراکترهای فارسی وارد کنید <br/>";
    }
    else if ((pr_name.length < 3 || pr_name.length > 50) && !Persian(pr_name))
    {
        error++;
        document.getElementById('error2').innerHTML = "لطفا بین 3 تا 50 کاراکتر فارسی وارد کنید <br/>";
    }
    //-------------------------------------------------------------------------------------------------------------------
    var pr_family = document.forms["form"]["PR_Family"].value;
    document.getElementById('error3').innerHTML = "";
    if (pr_family == "")
    {
        error++;
        document.getElementById('error3').innerHTML = "لطفا نام خانوادگی خود را وارد کنید <br/>";
    }
    else if ((pr_family.length < 3 || pr_family > 100) && Persian(pr_family))
    {
        error++;
        document.getElementById('error3').innerHTML = "تعداد کاراکترها باید بین 3 تا 100 باشد <br/>";
    }
    else if ((pr_family.length >= 3 || pr_family <= 100) && !Persian(pr_family))
    {
        error++;
        document.getElementById('error3').innerHTML = "لطفا تنها کاراکترهای فارسی وارد کنید <br/>";
    }
    else if ((pr_family.length < 3 || pr_family > 100) && !Persian(pr_family))
    {
        error++;
        document.getElementById('error3').innerHTML = "لطفا بین 3 تا 100 کاراکتر فارسی وارد کنید <br/>";
    }
    //-------------------------------------------------------------------------------------------------------------------
    var en_name_family = document.forms["form"]["EN_Name_Family"].value;
    document.getElementById('error4').innerHTML = "";
    if (en_name_family == "")
    {
        error++;
        document.getElementById('error4').innerHTML = "لطفا نام و نام خانوادگی خود را به انگلیسی وارد کنید <br/>";
    }
    else if ((en_name_family.length > 150) && English(en_name_family))
    {
        error++;
        document.getElementById('error4').innerHTML = "تعداد کاراکترها باید حداکثر 150 باشد <br/>";
    }
    else if ((en_name_family.length <= 150) && !English(en_name_family))
    {
        error++;
        document.getElementById('error4').innerHTML = "لطفا تنها کاراکترهای انگلیسی وارد کنید <br/>";
    }
    else if ((en_name_family.length > 150) && !English(en_name_family))
    {
        error++;
        document.getElementById('error4').innerHTML = "لطفا حداکثر 150 کاراکتر انگلیسی وارد کنید <br/>";
    }
    //-------------------------------------------------------------------------------------------------------------------
    var email = document.forms["form"]["Email"].value;
    document.getElementById('error5').innerHTML = "";
    if (email == "")
    {
        error++;
        document.getElementById('error5').innerHTML = "لطفا ایمیل خود را وارد کنید <br/>";
    }
    else if (!Validate_Email(email))
    {
        error++;
        document.getElementById('error5').innerHTML = "لطفا آدرس ایمیل معتبر وارد کنید <br/>";
    }
    //-------------------------------------------------------------------------------------------------------------------
    
    // if (selectedGender == null)
    //     errorMessage += "- Select your gender <br/>";

    if (error > 0) 
        return false;
    return true;
}
