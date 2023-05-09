<script setup>

</script>

<template>
  <section class="container-fluid">
      <div class="field_contact row">
      <div class="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h2 class="my-4" style="font-family:'Times New Roman', Times, serif;">Contact Information</h2>
          <hr class="col-sm-10 col-md-10 col-lg-10"/>
          <p style="font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;"><b>Address:</b> Km 9 Nguyen Trai Street,
          <br>
          Van Quan Ward, Ha Dong District,
          <br>
          Ha Noi Capital
          <br>
          VietNam
          <br> <br>
          <b>Email: </b>@hanu.edu.vn
          <br> <br>
          <b>Phone: </b>+84-965665230
          </p>
      </div>

      <div class="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h3 class="my-4" style="font-family: 'Times New Roman', Times, serif;">Get in touch</h3>
          <hr class="margintop5 marginbottom10" />
          <div></div>
          <form class="contactUs" style="font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
              <div class="row gx-3 mb-3">
                  <div class="col-3 col-sm-4 col-lg-3">
                      <label class="visually-hidden" for="title">Title</label>
                      <select class="form-select " id="title">
                          <option selected="selected">Mr.</option>
                          <option value="1">Ms.</option>
                          <option value="2">Mrs.</option>
                      </select>
                  </div>
                  <div class=" row gx-0 col-9 col-sm-8 col-lg-9">
                    <div class="col-6 px-2">
                      <div class="field__input-wrapper">
                      <label class="visually-hidden" for="firstName">firstName</label>
                      <input type="text" class="form-control " required="required" title="Please enter first name" id="firstName" placeholder="First Name">
                      </div>
                    </div>
                    <div class="col-6 px-2">
                      <div class="field__input-wrapper">
                      <label class="visually-hidden" for="lastName">lastName</label>
                      <input type="text" class="form-control " required="required" title="Please enter last name" id="lastName" placeholder="Last Name">
                      </div>
                    </div>
                  </div>
              </div>

              <div class="mb-3">
                    <div class="field__input-wrapper">
                      <label class="visually-hidden" for="companyName">company</label>
                      <input type="text" class="form-control " title="Please enter valid company name" id="firstName" placeholder="Company Name (Optional)">
                    </div>  
              </div>

              <div class="mb-3">
                <div class="field__input-wrapper">
                      <label class="visually-hidden" for="streetAddress">Street</label>
                      <input type="text" class="form-control " required="required" title="Please enter valid street address" id="streetAddress" placeholder="Street Address">               
                </div>
              </div>

              <div class="row gx-3 mb-3">
                  <div class="col-6 col-sm-6">
                      <label class="visually-hidden" for="postalCode">postalCode</label>
                      <input type="text" class="form-control " required="required" title="Please enter valid postal code" id="postalCode" placeholder="Postal Code">
                  
              </div>
                  <div class="col-6 col-sm-6">
                      <label class="visually-hidden" for="city">City</label>
                      <input type="text" class="form-control " required="required" title="Please enter valid city" id="city" placeholder="City">
                  </div>
              </div>
              <div class="mb-3">
                  <label class="visually-hidden" for="country">Country</label>
                  <select class="form-select" id="selectCountry">
                      <option value="">Select Country</option>
<option value="3">Afghanistan</option>
<option value="6">Albania</option>
<option value="60">Algeria</option>
<option value="12">American Samoa</option>
<option value="1">Andorra</option>
<option value="9">Angola</option>
<option value="5">Anguilla</option>
<option value="10">Antarctica</option>
<option value="4">Antigua and Barbuda</option>
<option value="11">Argentina</option>
<option value="7">Armenia</option>
<option value="15">Aruba</option>
<option value="14">Australia</option>
<option value="13">Austria</option>
<option value="16">Azerbaijan</option>
<option value="30">Bahamas</option>
<option value="23">Bahrain</option>
<option value="19">Bangladesh</option>
<option value="18">Barbados</option>
<option value="34">Belarus</option>
<option value="20">Belgium</option>
<option value="35">Belize</option>
<option value="25">Benin</option>
<option value="26">Bermuda</option>
<option value="31">Bhutan</option>
<option value="28">Bolivia</option>
<option value="17">Bosnia and Herzegovina</option>
<option value="33">Botswana</option>
<option value="32">Bouvet Island</option>
<option value="29">Brazil</option>
<option value="102">British Indian Ocean Territory</option>
<option value="27">Brunei Darussalam</option>
<option value="22">Bulgaria</option>
<option value="21">Burkina Faso</option>
<option value="24">Burundi</option>
<option value="112">Cambodia</option>
<option value="45">Cameroon</option>
<option value="36">Canada</option>
<option value="51">Cape Verde</option>
<option value="119">Cayman Islands</option>
<option value="39">Central African Republic</option>
<option value="205">Chad</option>
<option value="44">Chile</option>
<option value="46">China</option>
<option value="52">Christmas Island</option>
<option value="37">Cocos (Keeling) Islands</option>
<option value="47">Colombia</option>
<option value="114">Comoros</option>
<option value="40">Congo</option>
<option value="38">Congo, the Democratic Republic</option>
<option value="43">Cook Islands</option>
<option value="48">Costa Rica</option>
<option value="42">Cote D'Ivoire</option>
<option value="95">Croatia</option>
<option value="50">Cuba</option>
<option value="53">Cyprus</option>
<option value="54">Czech Republic</option>
<option value="57">Denmark</option>
<option value="56">Djibouti</option>
<option value="58">Dominica</option>
<option value="59">Dominican Republic</option>
<option value="61">Ecuador</option>
<option value="63">Egypt</option>
<option value="201">El Salvador</option>
<option value="85">Equatorial Guinea</option>
<option value="65">Eritrea</option>
<option value="62">Estonia</option>
<option value="203">Eswatini</option>
<option value="67">Ethiopia</option>
<option value="70">Falkland Islands (Malvinas)</option>
<option value="72">Faroe Islands</option>
<option value="69">Fiji</option>
<option value="68">Finland</option>
<option value="73">France</option>
<option value="78">French Guiana</option>
<option value="168">French Polynesia</option>
<option value="206">French Southern Territories</option>
<option value="74">Gabon</option>
<option value="82">Gambia</option>
<option value="77">Georgia</option>
<option value="55">Germany</option>
<option value="79">Ghana</option>
<option value="80">Gibraltar</option>
<option value="86">Greece</option>
<option value="81">Greenland</option>
<option value="76">Grenada</option>
<option value="84">Guadeloupe</option>
<option value="89">Guam</option>
<option value="88">Guatemala</option>
<option value="243">Guernsey</option>
<option value="83">Guinea</option>
<option value="90">Guinea-Bissau</option>
<option value="91">Guyana</option>
<option value="96">Haiti</option>
<option value="93">Heard Island and Mcdonald Islands</option>
<option value="226">Holy See (Vatican City State)</option>
<option value="94">Honduras</option>
<option value="92">Hong Kong</option>
<option value="97">Hungary</option>
<option value="105">Iceland</option>
<option value="101">India</option>
<option value="98">Indonesia</option>
<option value="104">Iran, Islamic Republic of</option>
<option value="103">Iraq</option>
<option value="99">Ireland</option>
<option value="100">Israel</option>
<option value="106">Italy</option>
<option value="107">Jamaica</option>
<option value="109">Japan</option>
<option value="242">Jersey</option>
<option value="108">Jordan</option>
<option value="120">Kazakhstan</option>
<option value="110">Kenya</option>
<option value="113">Kiribati</option>
<option value="116">Korea, Democratic People's Republic of</option>
<option value="117">Korea, Republic of</option>
<option value="118">Kuwait</option>
<option value="111">Kyrgyzstan</option>
<option value="121">Lao People's Democratic Republic</option>
<option value="130">Latvia</option>
<option value="122">Lebanon</option>
<option value="127">Lesotho</option>
<option value="126">Liberia</option>
<option value="131">Libyan Arab Jamahiriya</option>
<option value="124">Liechtenstein</option>
<option value="128">Lithuania</option>
<option value="129">Luxembourg</option>
<option value="141">Macao</option>
<option value="137">Macedonia, the Former Yugoslav Republic of</option>
<option value="135">Madagascar</option>
<option value="149">Malawi</option>
<option value="151">Malaysia</option>
<option value="148">Maldives</option>
<option value="138">Mali</option>
<option value="146">Malta</option>
<option value="136">Marshall Islands</option>
<option value="143">Martinique</option>
<option value="144">Mauritania</option>
<option value="147">Mauritius</option>
<option value="236">Mayotte</option>
<option value="150">Mexico</option>
<option value="71">Micronesia, Federated States of</option>
<option value="134">Moldova, Republic of</option>
<option value="133">Monaco</option>
<option value="140">Mongolia</option>
<option value="145">Montserrat</option>
<option value="132">Morocco</option>
<option value="152">Mozambique</option>
<option value="139">Myanmar</option>
<option value="153">Namibia</option>
<option value="162">Nauru</option>
<option value="161">Nepal</option>
<option value="159">Netherlands</option>
<option value="8">Netherlands Antilles</option>
<option value="154">New Caledonia</option>
<option value="164">New Zealand</option>
<option value="158">Nicaragua</option>
<option value="155">Niger</option>
<option value="157">Nigeria</option>
<option value="163">Niue</option>
<option value="156">Norfolk Island</option>
<option value="142">Northern Mariana Islands</option>
<option value="160">Norway</option>
<option value="165">Oman</option>
<option value="171">Pakistan</option>
<option value="178">Palau</option>
<option value="176">Palestinian Territory, Occupied</option>
<option value="166">Panama</option>
<option value="169">Papua New Guinea</option>
<option value="179">Paraguay</option>
<option value="167">Peru</option>
<option value="170">Philippines</option>
<option value="174">Pitcairn</option>
<option value="172">Poland</option>
<option value="177">Portugal</option>
<option value="175">Puerto Rico</option>
<option value="180">Qatar</option>
<option value="181">Reunion</option>
<option value="182">Romania</option>
<option value="183">Russian Federation</option>
<option value="184">Rwanda</option>
<option value="191">Saint Helena</option>
<option value="115">Saint Kitts and Nevis</option>
<option value="123">Saint Lucia</option>
<option value="241">Saint Martin</option>
<option value="173">Saint Pierre and Miquelon</option>
<option value="227">Saint Vincent and the Grenadines</option>
<option value="234">Samoa</option>
<option value="196">San Marino</option>
<option value="200">Sao Tome and Principe</option>
<option value="185">Saudi Arabia</option>
<option value="197">Senegal</option>
<option value="49">Serbia and Montenegro</option>
<option value="187">Seychelles</option>
<option value="195">Sierra Leone</option>
<option value="190">Singapore</option>
<option value="240">Sint Maarten</option>
<option value="194">Slovakia</option>
<option value="192">Slovenia</option>
<option value="186">Solomon Islands</option>
<option value="198">Somalia</option>
<option value="237">South Africa</option>
<option value="87">South Georgia and the South Sandwich Islands</option>
<option value="66">Spain</option>
<option value="125">Sri Lanka</option>
<option value="188">Sudan</option>
<option value="199">Suriname</option>
<option value="193">Svalbard and Jan Mayen</option>
<option value="189">Sweden</option>
<option value="41">Switzerland</option>
<option value="202">Syrian Arab Republic</option>
<option value="218">Taiwan, Province of China</option>
<option value="209">Tajikistan</option>
<option value="219">Tanzania, United Republic of</option>
<option value="208">Thailand</option>
<option value="211">Timor-Leste</option>
<option value="207">Togo</option>
<option value="210">Tokelau</option>
<option value="214">Tonga</option>
<option value="216">Trinidad and Tobago</option>
<option value="213">Tunisia</option>
<option value="215">Turkey</option>
<option value="212">Turkmenistan</option>
<option value="204">Turks and Caicos Islands</option>
<option value="217">Tuvalu</option>
<option value="221">Uganda</option>
<option value="220">Ukraine</option>
<option value="2">United Arab Emirates</option>
<option value="75">United Kingdom</option>
<option value="223">United States</option>
<option value="222">United States Minor Outlying Islands</option>
<option value="224">Uruguay</option>
<option value="225">Uzbekistan</option>
<option value="232">Vanuatu</option>
<option value="228">Venezuela</option>
<option value="231" selected="selected">Viet Nam</option>
<option value="229">Virgin Islands, British</option>
<option value="230">Virgin Islands, U.s.</option>
<option value="233">Wallis and Futuna</option>
<option value="64">Western Sahara</option>
<option value="235">Yemen</option>
<option value="238">Zambia</option>
<option value="239">Zimbabwe</option>
                  </select>
              </div>

              <div class="row gx-3 mb-3">
                  <div class="col-6 col-sm-6">
                      <div class="field__input-wrapper">
                      <label class="visually-hidden" for="emailAddress">Email</label>
                      <input type="text" class="form-control "  required="required" title="Please enter valid telephone number" id="email" placeholder="Email Address">
                      </div>
                  </div>
                  <div class="col-6 col-sm-6">
                      <div class="field__input-wrapper">
                      <label class="visually-hidden" for="phoneNumber">phoneNumber</label>
                      <input type="phone number" class="form-control " required="required" title="Please enter valid telephone number" id="phoneNumber" placeholder="Telephone Number">
                      </div>
                  </div>
              </div>

              <div class=" mb-3 ">
                  <div class="field__input-wrapper">
                       <label class="visually-hidden" for="message">message</label>                                                            
                       <textarea id="message" class="form-control "  title="Please enter valid message" placeholder="Your message" rows="3"></textarea>
                  </div>
              </div>
              <div class="mb-6">
                  <button type="submit" class="btn btn-primary btn-lg">Submit</button>
              </div>
          </form>
      </div>
  </div>
  <h1 style="font-family: 'Times New Roman', Times, serif; text-align: center;" >Google Map</h1>
  <iframe class="col-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.0912855312604!2d105.79467819999999!3d20.988977600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135adb29ed54487%3A0xbe22035eae87b5d7!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1680086729575!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </section>
</template>

<style scoped>
.container-fluid{
    min-height: fit-content;
    background: #FFF9F9;   
}


.form-control, .form-select{
    width:100%;
    height:auto;
    padding:14px 12px;
    border: solid 1px #ccc;
    border-radius: 0;
}
.field_contact{
  margin-bottom: 80px;
}

.btn{
  background: rgb(203, 83, 32);
  border: none;
}

input{
    font-size: 1rem;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}

</style>
