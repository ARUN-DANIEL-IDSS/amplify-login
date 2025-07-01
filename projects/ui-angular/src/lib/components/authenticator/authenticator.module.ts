import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmplifySlotComponent } from '../../utilities/amplify-slot/amplify-slot.component';
import { AuthenticatorComponent, BaseFormFieldsComponent, ConfirmResetPasswordComponent, ConfirmSignInComponent, ConfirmSignUpComponent, ConfirmVerifyUserComponent, FederatedSignInButtonComponent, FederatedSignInComponent, ForceNewPasswordComponent, ForceNewPasswordFormFieldsComponent, FormFieldComponent, ForgotPasswordComponent, SetupTotpComponent, SignInComponent, SignUpComponent, SignUpFormFieldsComponent, VerifyUserComponent } from './components';
import { SelectMfaTypeComponent } from './components/select-mfa-type/select-mfa-type.component';
import { SetupEmailComponent } from './components/setup-email/setup-email.component';
import {  ButtonComponent, CheckboxComponent, ErrorComponent, PasswordFieldComponent, PhoneNumberFieldComponent, SelectComponent, TabItemComponent, TabsComponent, TextFieldComponent } from './../../primitives';

/**
 * Note: Angular components and directives inside module files has to be imported directly.
 *
 * Related: https://github.com/ng-packagr/ng-packagr/issues/567
 */


@NgModule({
  declarations: [
    AmplifySlotComponent,
    AmplifySlotDirective,
    AuthenticatorComponent,
    BaseFormFieldsComponent,
    ButtonComponent,
    CheckboxComponent,
    ConfirmResetPasswordComponent,
    ConfirmSignInComponent,
    ConfirmSignUpComponent,
    ConfirmVerifyUserComponent,
    ErrorComponent,
    FederatedSignInButtonComponent,
    FederatedSignInComponent,
    ForceNewPasswordComponent,
    ForceNewPasswordFormFieldsComponent,
    FormFieldComponent,
    PasswordFieldComponent,
    PhoneNumberFieldComponent,
    ForgotPasswordComponent,
    SelectComponent,
    SelectMfaTypeComponent,
    SetupEmailComponent,
    SetupTotpComponent,
    SignInComponent,
    SignUpComponent,
    SignUpFormFieldsComponent,
    TabItemComponent,
    TabsComponent,
    TextFieldComponent,
    VerifyUserComponent,
  ],
  imports: [CommonModule],
  exports: [
    AmplifySlotDirective,
    AuthenticatorComponent,
    CheckboxComponent,
    SignUpFormFieldsComponent,
    ForceNewPasswordFormFieldsComponent,
    TextFieldComponent,
  ],
})
export class AmplifyAuthenticatorModule {}
