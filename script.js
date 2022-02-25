let outputTerms = document.getElementById("cs-output-signature");

function createTerms() {
  let employeeName = document.getElementById("cs-employee-name").value;
  let employeePronouns = document.getElementById("cs-employee-pronouns").value;
  let employeeTitle = document.getElementById("cs-employee-title").value;
  let employeeMphone = document.getElementById("cs-employee-mphone").value;
  let employeeTphone = document.getElementById("cs-employee-tphone").value;
  let officeAddress = document.getElementById("cs-address").value;
  let phoneNoDash = employeeMphone.replace(/-/g, "");

  // console.log(output);
  outputTerms.innerHTML = `
  <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
    style="vertical-align: -webkit-baseline-middle; font-size: 5px; line-height:5px; font-family: Poppins, Helvetica, Arial, sans-serif;">
    <tbody>
        <tr>
            <td>
                <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: 15px; line-height: 15px; font-family: Poppins, Helvetica, Arial, sans-serif; border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr" emb-background-style="" class="sc-gPEVay eQYmiW">
                <tbody>
                    <tr height="20" style="vertical-align: middle;">
                        <td style="padding: 0px; vertical-align: middle;">
                            <p color="#202020"
                                style="margin: 0px; font-weight: 600; font-size: 15px; line-height: 15px; color: rgb(32, 32, 32);">
                                <span>${employeeName}</span><span color="#202020"
                                style="margin: 0px; font-weight: 500; font-size: 13px; color: rgb(148, 148, 148);">
                                <span>${employeePronouns}</span></span></p>
                        </td>
                    </tr>
                    <tr height="20" style="vertical-align: middle;">
                        <td style="padding: 0px; vertical-align: middle;">
                            <p color="#EF293D" font-size="medium"
                                style="margin: 0px; font-weight: 600; color: rgb(239, 41, 61); font-size: 15px; line-height: 15px;">
                                <span>${employeeTitle}</span></p>
                        </td>
                    </tr>
                </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: 13px; line-height: 13px;  font-family: Poppins, Helvetica, Arial, sans-serif; border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr" emb-background-style="" class="sc-gPEVay eQYmiW">
                    <tbody>
                        <tr>
                            <td style="vertical-align: middle;">
                                <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                    style="vertical-align: -webkit-baseline-middle; font-size: 13px; line-height: 13px; font-family: Poppins, Helvetica, Arial, sans-serif;">
                                    <tbody>
                                        <tr>
                                            <td class="sc-TOsTZ kjYrri" style="text-align: center;"><img
                                                    src="https://drive.google.com/uc?id=1r4IUEZAzEu7FBt3o7cK-ZmJeFAvigPrn"
                                                    role="presentation" width="45" class="sc-cHGsZl bHiaRe"
                                                    style="max-width: 45px; display: block;"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td width="18">
                                <div></div>
                            </td>
                            <td style="padding: 0px; vertical-align: middle;">
                                <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                    style="vertical-align: -webkit-baseline-middle; font-size: 13px; line-height: 13px; font-family: Poppins, Helvetica, Arial, sans-serif;">
                                    <tbody>
                                        <tr height="18" style="vertical-align: middle;">
                                            <td style="padding: 0px;">
                                                <p color="#EF293D" font-size="medium" style="margin: 0px; font-weight: 400; color: rgb(32, 32, 32); font-size: 13px; line-height: 13px;">
                                                <span>${employeeMphone}</span>&nbsp;<span>${employeeTphone}</span></p>
                                            </td>
                                        </tr>
                                        <tr height="18" style="vertical-align: middle;">
                                            <td style="padding: 0px;">
                                                <p color="#EF293D" font-size="medium" style="margin: 0px; font-weight: 400; color: rgb(32, 32, 32); font-size: 13px; line-height: 13px;">
                                                <span>${officeAddress}</span></p>
                                            </td>
                                        </tr>
                                        <tr height="18" style="vertical-align: middle;">
                                            <td style="padding: 0px;">
                                                <p color="#EF293D" font-size="medium" style="margin: 0px; font-weight: 400; color: rgb(32, 32, 32); font-size: 13px; line-height: 13px;">
                                                    <a href="https://www.hugoandcat.com/?utm_source=email_signature&utm_medium=email&utm_campaign=team_member_email" color="#202020"                                                    style="text-decoration: none; text-decoration-color: rgb(32, 32, 32);
                                                    -webkit-text-decoration-color: rgb(32, 32, 32); color: rgb(32, 32, 32);">hugoandcat.com</a></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>`;
}
