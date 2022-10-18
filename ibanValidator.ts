Saudi IBAN number
/*******In your custom-validators file add like this file***/
/**
 * validateSaudiIBAN IBAN
 * return null or invalidIBAN
 */

export function validateSaudiIBAN(c: AbstractControl): { [key: string]: boolean } | null {
  const val = c.value;
  if (val) {
    const ibanPattern = /^SA(\d{22})$/;
    if (!ibanPattern.test(val)) {
      return { invalidIBAN: true }; // if not valid
    }
  }
  return null; // if valid
}


/*******In your component file***/

this.contractInfoForm = this.fb.group({
      
      sellerIBAN: ['SA0710000011100296780100', [Validators.required, validateSaudiIBAN]]
      
 })
/*******In your template file***/
 <div class="col-md-3 mb-4 mb-md-0">
                <input type="text" class="form-control" name="buyerIBAN" formControlName="buyerIBAN" placeholder="SAxxxxxxxxxxxxxxxxxxxxxx" maxlength="24"
                [ngClass]="{'is-invalid': (contractInfoForm.controls.buyerIBAN.touched || contractInfoForm.controls.buyerIBAN.dirty) && contractInfoForm.controls.buyerIBAN.errors }"/>
                
                <div class="invalid-feedback" *ngIf="contractInfoForm.controls.buyerIBAN.errors">
                    <div *ngIf="contractInfoForm.controls.buyerIBAN.errors?.invalidIBAN">{{"invalidIBAN" | translate}}</div>
                    <div *ngIf="submitted && contractInfoForm.controls.buyerIBAN.errors?.required"> {{"required" | translate}}</div>
                 </div>
</div>
