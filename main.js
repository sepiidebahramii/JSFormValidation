/*
RegEx references:
1. Testing RegEx: https://regexr.com/
2. https://www.w3resource.com/javascript/form/email-validation.php
3. https://stackoverflow.com/questions/45790123/regex-persian-date-validation
4. https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch06s07.html
5. https://stackoverflow.com/questions/59380759/regex-to-allow-only-few-special-characters-along-with-az-or-az
*/

function Persian(event)
{
    var p = /^[\u0600-\u06FF\s]*$/; // just persian characters and space
    if (!p.test(event))
        return false; // not persian
    return true; // persian
}
function English(event)
{
    var p = /^[a-z ]*$/i; // just english characters and space
    if (!p.test(event))
        return false; // not english
    return true; // english
}
function Validate_Email(event) 
{
    var p = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!p.test(event))
        return false // invalid 
    return true // valid
}
function Validate_Phone(event)
{
    var p = /^09\d{9}$/;
    if (!p.test(event))
        return false; // invalid
    return true; // valid
}
function Validate_SSN(event)
{
    var p = /^\d{3}-\d{6}-\d{1}$/;
    if (!p.test(event))
        return false; // invalid
    return true; // valid
}
function Validate_Password(event)
{
    var p = /^[a-zA-Z0-9-+!#$*=]+$/ // just english characters, numbers and some special characters
    if (!p.test(event))
        return false; // invalid
    return true; // valid
}
function Validate_Birthday(event)
{
    var p = /[1][3](9[0]|[1-8][0-9])\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|([1-2][0-9])|(0[1-9]))))$/ // year range = 1310 - 1390, month range = 01 - 12, day range = 1 - 31
    if (!p.test(event))
        return false; // invalid
    return true; // valid
}

var password_flag = 0;
function Check_Pass() 
{
    document.getElementById('error9').innerHTML = "";
    if (document.forms["form"]["Password"].value != document.forms["form"]["RepPassword"].value) 
    {
        password_flag = 1 // error
        document.getElementById('error9').innerHTML = "رمزهای عبور با یک‌دیگر سازگار نیستند";
    }
    else
    {
        password_flag = 0; // no error
        document.getElementById('error9').innerHTML = "";
    }
}

function Validate_Form() 
{
    var error = 0
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
    else if ((pr_family.length >= 3 && pr_family <= 100) && !Persian(pr_family))
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
    var phone = document.forms["form"]["Phone"].value;
    document.getElementById('error6').innerHTML = "";
    if (phone == "09")
    {
        error++;
        document.getElementById('error6').innerHTML = "لطفا شماره تلفن همراه خود را وارد کنید <br/>";
    }
    else if (!Validate_Phone(phone))
    {
        error++;
        document.getElementById('error6').innerHTML = "الگوی وارد شده نادرست می‌باشد <br/>";
    }
    //-------------------------------------------------------------------------------------------------------------------
    var ssn = document.forms["form"]["SSN"].value;
    document.getElementById('error7').innerHTML = "";
    if (ssn == "")
    {
        error++;
        document.getElementById('error7').innerHTML = "لطفا کد ملی خود را وارد کنید <br/>";
    }
    else if (!Validate_SSN(ssn))
    {
        error++;
        document.getElementById('error7').innerHTML = "الگوی وارد شده نادرست می‌باشد <br/>";
    }
    //-------------------------------------------------------------------------------------------------------------------
    var password = document.forms["form"]["Password"].value;
    document.getElementById('error8').innerHTML = "";
    if (password == "")
    {
        error++;
        document.getElementById('error8').innerHTML = "لطفا رمز عبور خود را انتخاب کنید <br/>";
    }
    else if ((password.length < 8 || password.length > 24) && Validate_Password(password))
    {
        error++;
        document.getElementById('error8').innerHTML = "تعداد کاراکترها باید بین 8 تا 24 باشد <br/>";
    }
    else if ((password.length >= 8 && password.length <= 24) && !Validate_Password(password))
    {
        error++;
        document.getElementById('error8').innerHTML = "رمز عبور باید فاقد کاراکترهای فارسی باشد <br/>";
    }
    else if ((password.length < 8 || password.length > 24) && !Validate_Password(password))
    {
        error++;
        document.getElementById('error8').innerHTML = "رمز عبور باید بین 8 تا 24 کاراکتر و فاقد کاراکترهای فارسی باشد <br/>";
    }
    //-------------------------------------------------------------------------------------------------------------------
    var reppassword = document.forms["form"]["RepPassword"].value;
    document.getElementById('error9').innerHTML = "";
    if (reppassword == "")
    {
        error++;
        document.getElementById('error9').innerHTML = "لطفا رمز عبور خود را تایید کنید <br/>";
    }
    else if(reppassword != password)
    {
        error++;
        document.getElementById('error9').innerHTML = "رمزهای عبور با یک‌دیگر سازگار نیستند <br/>";
    }
    //-------------------------------------------------------------------------------------------------------------------
    var address = document.forms["form"]["Address"].value;
    document.getElementById('error10').innerHTML = "";
    if (address == "")
    {
        error++;
        document.getElementById('error10').innerHTML = "لطفا آدرس خود را وارد کنید <br/>";
    }
    else if ((address.length > 250) && Persian(address))
    {
        error++;
        document.getElementById('error10').innerHTML = "تعداد کاراکترها باید حداکثر 250 باشد <br/>";
    }
    else if ((address.length <= 250) && !Persian(address))
    {
        error++;
        document.getElementById('error10').innerHTML = "لطفا تنها کاراکترهای فارسی وارد کنید <br/>";
    }
    else if ((address.length > 250) && !Persian(address))
    {
        error++;
        document.getElementById('error10').innerHTML = "لطفا حداکثر 250 کاراکتر فارسی وارد کنید <br/>";
    }
    //-------------------------------------------------------------------------------------------------------------------
    var birthday = document.forms["form"]["Birthday"].value;
    document.getElementById('error11').innerHTML = "";
    if (birthday == "")
    {
        error++;
        document.getElementById('error11').innerHTML = "لطفا تاریخ تولد خود را وارد کنید <br/>";
    }
    else if (!Validate_Birthday(birthday))
    {
        error++;
        document.getElementById('error11').innerHTML = "لطفا تاریخ تولد خود را به درستی و در بازه 1310 تا 1390 وارد کنید <br/>";
    }
    //-------------------------------------------------------------------------------------------------------------------
    var status = null;
    document.getElementById('error12').innerHTML = "";
    for (var i = 0; i < document.forms["form"]["Status"].length; i++) 
    {
        if (document.forms["form"]["Status"][i].checked) 
            status = document.forms["form"]["Status"][i].value;
    }
    if (status == null)
    {
        error++;
        document.getElementById('error12').innerHTML = "لطفا وضعیت تاهل خود را انتخاب کنید <br/>";
    }
    //-------------------------------------------------------------------------------------------------------------------
    if (error > 0 || password_flag == 1) 
        return false;
    else
    {
        alert("اطلاعات شما با موفقیت ثبت شد")
        return true;
    }
}