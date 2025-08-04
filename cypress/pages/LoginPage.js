class LoginPage {


 url='https://www.edu.goit.global/account/login';
 emeil='#user_email';
 password='#user_password';
 loginButton='.next-1jphuq5';
 forgetPassword='.next-1f1fv1i > .next-1qrvie4';



 //url giden bir methodumuz var.
urlGit(){
    cy.visit(this.url);
}


emailGonder(mail){
    cy.get(this.emeil).type(mail);
}

passwordGonder(pass){
    cy.get(this.password).type(pass);
}

clickLoginButton(){
    cy.get(this.loginButton).click();
}



}

export default new LoginPage();