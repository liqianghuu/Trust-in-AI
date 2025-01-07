// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Trust in AI",
    "description": "In this research, we concentrate on the effect of two factors that have not been discussed before on increasing one's trust towards ChatGPT. First, how the familiarity of its label alone increases one's trust. Second, how explanations of the model outcomes fosters trust. ",
    "repository": "",
    "contributors": "Hanmeng Wang (h.wang1@student.tue.nl)"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Trust in ai_Label and Explanation_Hanmeng Wang",
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
//mixed design
//between factor: label

this.parameters.condition = Math.random();

const ds = this.options.datastore;
ds.set('condition', this.parameters.condition)
ds.commit('condition', this.parameters.condition);


if(this.parameters.condition < 0.5){
  this.parameters.labelname = "ChatGPT"
  }
  else{
  this.parameters.labelname = "AI"
  }

const label_name = this.parameters.labelname
// extract saved data and name it
ds.set('label_name', label_name);
ds.commit('label_name', label_name);

}
          },
          "title": "Sequence",
          "content": []
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "content": "Dear participant, "
            },
            {
              "type": "text",
              "title": "",
              "content": "Thank you for supporting this study, which aims to provide new insights into how humans and ${this.parameters.label_name} collaborate in the area of legal decision-making. The study is being conducted by Hanmeng Wang from Eindhoven University of Technology (The Netherlands)."
            },
            {
              "required": true,
              "type": "text",
              "content": "Before we start, we provide some information about\u003Cbr\u003E \n(1) the study task including a short training session \u003Cbr\u003E\n(2) ${this.parameters.label_name}, which will have a role in the task you are about to carry out"
            },
            {
              "required": true,
              "type": "text",
              "content": "Your main goal for this study is to estimate the jail time of several real criminal law cases with the support of ${this.parameters.label_name}. Once you are finished with all the law cases, we kindly ask you to answer some questions at the end of the study."
            },
            {
              "required": true,
              "type": "text",
              "content": "The study will take approximately 25 minutes to complete. You participate on a voluntary basis and will get £5 as monetary reward for participation. We hope it's fun and that you appreciate helping us out. "
            },
            {
              "required": true,
              "type": "text",
              "content": "To start, you are asked to sign the Consent Form on the next page."
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
/* 
  set between label_name
*/ 
//set between-factor
const ds = this.options.datastore;
const islabel = ds.extract(`condition`);

// convert data to string
const islabel_str = islabel.toString();
// grab last number in string
const islabel_str_last = islabel_str.match(/\d+(?=\D*$)/);
const islabel_str_number = parseInt(islabel_str_last)




/* 
  represent label_name on screen
*/ 
// convert data to string
const label_name_str = ds.extract(`label_name`).toString();
const label_name_match = label_name_str.match(/\w+(?=\W*$)/);
// document.getElementById("label_name").innerHTML = label_name_match
this.parameters.label_name = label_name_match


}
          },
          "title": "Welcome"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "Declaration of Consent"
            },
            {
              "required": true,
              "type": "text",
              "content": "\u003Cb\u003E1. Introduction\u003C\u002Fb\u003E \u003Cbr\u003E\nEindhoven Technical University (TU\u002Fe) invites you to take part in the research project \u003Cem\u003ETrust in human-AI interaction: how AI’s identity affects judicial decisions\u003C\u002Fem\u003E, because you are in our participant database or registered from our invitation.  \u003Cbr\u003E\nJoining this research project is your choice. Your participation is completely voluntary and does not pose any physical, legal or economic risks. You can gain £5 as compensation for participation. During the process, you are not obliged to answer questions you are uncomfortable with, and you can withdraw from the research at any time without explaining why. Declining or withdrawing will not have a negative impact for you.\u003Cbr\u003E\nBefore you decide, please read the following information to understand what the research is about, what we expect from you and how we handle your personal data. After reading, you can sign up by completing the attached form. \u003Cbr\u003E\nIf you have questions, feel free to contact Hanmeng Wang via h.wang1@student.tue.nl. You can also discuss this information with people you trust.\u003Cbr\u003E"
            },
            {
              "required": true,
              "type": "text",
              "content": "\u003Cb\u003E2. Purpose of the research\u003C\u002Fb\u003E \u003Cbr\u003E\nThe purpose of the study is to analyze the way in which people make decisions with the help of AI tools. The research data will be used for the analysis in a master's thesis. The project is managed by Hanmeng Wang.\u003Cbr\u003E"
            },
            {
              "required": true,
              "type": "text",
              "content": "\u003Cb\u003E3. Controller in the sense of the GDPR\u003C\u002Fb\u003E \u003Cbr\u003E\nTU\u002Fe is in charge of handling your personal data for the research. You can contact TU\u002Fe at:  \u003Cbr\u003E\nTechnische Universiteit Eindhoven \u003Cbr\u003E\nDe Groene Loper 3  \u003Cbr\u003E\n5612 AE Eindhoven \u003Cbr\u003E\n"
            },
            {
              "required": true,
              "type": "text",
              "content": "\u003Cb\u003E 4. What will taking part in the research project involve? \u003C\u002Fb\u003E\u003Cbr\u003E\nIn the research project, we will collect your experimental data using an online survey. This experiment will be conducted online using your web browser. The instructions, measurements and debriefing will take approximately 25 minutes. \u003Cbr\u003E\nDuring the study, you will first receive brief training and then view 16 actual Dutch criminal cases for which you will predict the jail sentencing. After viewing each case, you can indicate how certain you are about your answer and have the option to adjust your response based on advice given by the system. After viewing every four cases, you will indicate how trustworthy you think about the current system. In the end, we will ask you to fill out a short questionnaire about your demographic information. \u003Cbr\u003E\nNote that the experimental and demographic data are all anonymized. The goal of collecting, analyzing, and storing this data is to answer the research question and publish the results in the scientific literature.  In addition, some legal cases may include disturbing facts which may lead to discomfort or trigger thoughts about possible traumatic experiences. \u003Cbr\u003E"
            },
            {
              "required": true,
              "type": "text",
              "content": "\u003Cb\u003E 5. What personal data from you do we gather and process? \u003C\u002Fb\u003E\u003Cbr\u003E\n\u003Cul\u003E\n\u003Cli\u003EContact data: email address. To send you a summary of the results if you wish to receive this \u003C\u002Fli\u003E \u003Cbr\u003E\n\u003Cli\u003EDemographics: age, gender, education, occupation, English language proficiency, expertise in judicial knowledge, affinity for technology, risk-aversion level. All of these are covariates that are used in the study.\u003C\u002Fli\u003E \u003Cbr\u003E\n\u003C\u002Ful\u003E\nThe personal data that were gathered via computer logging and other documents within the framework of this research project, will be stored on an encrypted server of the Human-Technology Interaction group. The contact data is an option for the participant to choose for receiving the analysis result, which will be stored separately. It will be removed once the result has been sent. \u003Cbr\u003E\nThe raw and processed research data will be retained for a period of 10 years. The research data will, if necessary (e.g. for a check on scientific integrity) and only in an anonymous form be made available to persons outside the research group. Otherwise, the research data will only be shared within the research group, without containing any information that can identify the participants.\u003Cbr\u003E"
            },
            {
              "required": true,
              "type": "text",
              "content": "\u003Cb\u003E 6. Stopping your participation \u003C\u002Fb\u003E\u003Cbr\u003E\nIf you end your participation in the research we will not use your data anymore from that moment on. \u003Cbr\u003E\nDo you wish to end the research, or do you have any questions? Then please contact Hanmeng Wang via h.wang1@student.tue.nl. If you have any complaints you can contact the supervisor Chris Snijders via c.c.p.snijders@tue.nl \u003Cbr\u003E\nYou have the right to request access, rectification, objection, erasure or adaptation of your data. Submit your request through privacy@tue.nl. \u003Cbr\u003E\nFor concerns or questions about the handling of personal data e-mail the data protection officer of TU\u002Fe at dataprotectionofficer@tue.nl. You can also file a complaint with the Dutch data protection authority: the Autoriteit Persoonsgegevens.  \u003Cbr\u003E"
            },
            {
              "required": true,
              "type": "text",
              "content": "\u003Cb\u003E 7. Legal basis for processing your personal data \u003C\u002Fb\u003E\u003Cbr\u003E\nWe process your personal data because it is part of the university’s public task to conduct scientific research as stated in article 1.3 of the Dutch Wet Hoger onderwijs en Wetenschappelijk onderzoek. TU\u002Fe always follows established codes of conduct for research integrity and the scientific standards.  \u003Cbr\u003E"
            },
            {
              "required": true,
              "type": "text",
              "content": "\u003Cb\u003E 8. Who has access to your personal data? \u003C\u002Fb\u003E\u003Cbr\u003E\n\u003Cem\u003EAccess to personal data within TU\u002Fe \u003C\u002Fem\u003E \u003Cbr\u003E\nOnly authorized employees involved in the research have access to your personal data, but only if necessary for their tasks. The authorized employees will keep your personal data confidential.  \u003Cbr\u003E\n\u003Cem\u003E Access to personal data by other parties \u003C\u002Fem\u003E \u003Cbr\u003E\nWe will not share your personal data with other parties, unless we are required to do so by law. \u003Cbr\u003E"
            },
            {
              "required": true,
              "type": "text",
              "content": "\u003Cb\u003E 9. How are your personal data protected? \u003C\u002Fb\u003E\u003Cbr\u003E\nTU\u002Fe  has implemented appropriate technical and organizational measures to protect personal data. These measures include using centrally managed and verified research and storage tools.\u003Cbr\u003E"
            },
            {
              "required": true,
              "type": "text",
              "content": "\u003Cb\u003E 10. Confidentiality, storage of data and future research \u003C\u002Fb\u003E\u003Cbr\u003E\nThe collected data will be stored on OneDrive. \u003Cbr\u003E\nWe will make sure that any published research results will not include confidential or identifiable information about you unless you explicitly agreed to it, for example if you want your name to be mentioned in publications. \u003Cbr\u003E\nThe data collected in this study might also be of relevance for future research projects within the Human Technology Interaction group in an online data repository. The coded data collected in this study and that will be released to the public will (to the best of our knowledge and ability) not contain information that can identify you. It will include all answers you provide during the study, including demographic variables (e.g., age and gender) if you choose to provide these during the study. \u003Cbr\u003E\nWe will not share personal information about you or your responses in this study with anyone outside of the research team. Only the researchers will know your identity and responses and we will store that information in an encrypted and password protected database. \u003Cbr\u003E\nThis research has been assessed and approved by the ethical committee of Eindhoven University of Technology. \u003Cbr\u003E"
            },
            {
              "required": true,
              "type": "text",
              "content": "\u003Cb\u003E Consent form for participation \u003C\u002Fb\u003E \u003Cbr\u003E\n1. I have enough information about the research project from the separate information sheet. I have read it and I had the chance to ask questions, which have been answered to my satisfaction. \u003Cbr\u003E\n2. I take part in this research project voluntarily. There is no explicit or implicit pressure for me to take part in this research project and I understand I can stop my participation at any moment, without explaining why. I do not have to answer any question I do not want to answer. \u003Cbr\u003E\n3. I know my personal data will be collected and used for the research, as explained to me in the information sheet. \u003Cbr\u003E"
            },
            {
              "required": true,
              "type": "radio",
              "label": "I have read and understood the procedure, and I agree to voluntarily participate. I also give permission to make my anonymised recorded data available to others in a public online data repository.",
              "options": [
                {
                  "label": "YES, I give my consent.",
                  "coding": "1"
                }
              ],
              "name": "i-have-read-and-understood-the-procedure-and-i-agree-to-voluntarily-participate.-i-also-give-permission-to-make-my-anonymised-recorded-data-available-to-others-in-a-public-online-data-repository."
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Inform Consent"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "Please provide your Prolific ID",
              "content": ""
            },
            {
              "required": true,
              "type": "input",
              "name": "prolific_id",
              "help": "Only provide figures and digits, for example: 34ds1135aa561234"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Prolific ID"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "Introduction: \u003Cspan id = \"indefinite_article\"\u003E\u003C\u002Fspan\u003E ${this.parameters.label_name} system for legal recommendations.",
              "content": "For the study, you are supported by recommendations from  ${this.parameters.label_name}. You will find some details on this system and its functionalities below:"
            },
            {
              "required": true,
              "type": "text",
              "content": "• ${this.parameters.label_name} is designed and trained to produce responses that closely resemble human natural language. Through specialized training in specific domains, such as legal expertise, it can facilitate tasks like legal decision-making. Consequently, it can serve as a valuable resource for guiding decisions based on publicly available databases of legal cases, particularly within the European context."
            },
            {
              "required": true,
              "type": "text",
              "content": "• ${this.parameters.label_name} is based on machine learning technology. It can detect keywords and contextually analyzes legal cases through ongoing learning processes."
            },
            {
              "required": true,
              "type": "text",
              "content": "• Due to technical limitations, all recommendations from  ${this.parameters.label_name} needed to be recorded in advance. Although there is no real-time interaction, you receive actual calculations from a previous training session."
            }
          ],
          "scrollTop": true,
          "submitButtonText": "I learned about its usage →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
const ds = this.options.datastore;

/* 
  represent label_name on screen
*/ 
// convert data to string
const label_name_str = ds.extract(`label_name`).toString();
const label_name_match = label_name_str.match(/\w+(?=\W*$)/);
// document.getElementById("label_name").innerHTML = label_name_match
this.parameters.label_name = label_name_match


},
            "run": function anonymous(
) {
const ds = this.options.datastore;

// convert data to string
const label_name_str = ds.extract(`label_name`).toString();
const label_name_match = label_name_str.match(/\w+(?=\W*$)/);

if(label_name_match[0].valueOf() =="AI".valueOf()){
  document.getElementById("indefinite_article").innerHTML = "an"
}else{
  document.getElementById("indefinite_article").innerHTML = "a"
}



}
          },
          "title": "AI system (Intro) "
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "Introduction: LEGAL TASK",
              "content": "In the following tasks, you need to estimate the jail time of 16 actual Dutch criminal law cases with the support of ${this.parameters.label_name}'s advice. For each case, you will follow the same steps:"
            },
            {
              "required": true,
              "type": "text",
              "content": "\u003Cu\u003EStep 1\u003C\u002Fu\u003E: Read the legal case and estimate the jail time verdict (in months). \u003Cbr\u003E \n\u003Cu\u003EStep 2\u003C\u002Fu\u003E: Review the suggestion that our ${this.parameters.label_name} based system recommends for this case, and decide whether you want to adjust your initial estimate.\u003Cbr\u003E\n\u003Cu\u003EStep 3\u003C\u002Fu\u003E: You are told the actual jail time that was assigned in the legal case. \u003Cbr\u003E \n\u003Cu\u003EStep 4\u003C\u002Fu\u003E: Indicate your current level of trust in ${this.parameters.label_name} every four cases.\u003Cbr\u003E"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"illustration.pic.jpg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "text",
              "title": "A note about the legal cases:",
              "content": "To ensure comprehensibility and prevent bias, we \u003Cu\u003E shortened and anonymized \u003C\u002Fu\u003E all criminal cases. For example, we excluded specific locations or descriptions. We also anonymized defendant's gender. \u003Cbr\u003E\n\u003Cu\u003EWarning\u003C\u002Fu\u003E: in some cases you will read descriptions of legal cases that involve violence or other kinds of behavior that may trigger discomfort."
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {
            "illustration.pic.jpg": "embedded\u002Fe957edf8aa79641d8e20a75b429394f46d64675037e492544ed887ebb7a9fae8.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
const ds = this.options.datastore;


/* 
  represent label_name on screen
*/ 
// convert data to string
const label_name_str = ds.extract(`label_name`).toString();
const label_name_match = label_name_str.match(/\w+(?=\W*$)/);
// document.getElementById("label_name").innerHTML = label_name_match
this.parameters.label_name = label_name_match


}
          },
          "title": "Procedure (Intro)"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "To become familiar with the procedure, we prepared one training case for you:",
              "content": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "I am ready →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Training case"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "content": "The defendant, along with his\u002Fher co-suspects, was guilty of complicity in threatening to shoot at a business premises and placing and detonating an explosive in the mailbox belonging to that business premises. The defendant was the one who planted and detonated the explosive.\u003Cbr\u003EThe defendant has previously been convicted of firearms possession.",
              "title": "Case: Throwing explosive, with others"
            },
            {
              "type": "text",
              "title": "Initial estimate",
              "content": "please enter your estimate"
            },
            {
              "required": true,
              "type": "input",
              "name": "training_initial_estimate",
              "attributes": {
                "type": "number"
              }
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Step 1: Initial estimate"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "title": "Case: Throwing explosive, with others",
              "content": "The defendant, along with his\u002Fher co-suspects, was guilty of complicity in threatening to shoot at a business premises and placing and detonating an explosive in the mailbox belonging to that business premises. The defendant was the one who planted and detonated the explosive.\u003Cbr\u003EThe defendant has previously been convicted of firearms possession."
            },
            {
              "required": true,
              "type": "text",
              "title": "Calculated estimate from \u003Cspan id=\"label_name\"\u003E\u003C\u002Fspan\u003E : \u003Cbr\u003E 16 months"
            },
            {
              "type": "text",
              "title": "Please confirm \u002F update your jail time estimate below (your initial estimate was \u003Cspan id=\"initial_estimate\"\u003E\u003C\u002Fspan\u003E months):"
            },
            {
              "required": true,
              "type": "input",
              "attributes": {
                "type": "number"
              },
              "name": "training_final_estimate"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
const ds = this.options.datastore;

// extract saved data and name it
const initial_estimate = ds.extract(`training_initial_estimate`);
// convert data to string
const initial_estimate_str = initial_estimate.toString();
// grab last number in string
const initial_estimate_last = initial_estimate_str.match(/\d+(?=\D*$)/);
document.getElementById("initial_estimate").innerHTML = initial_estimate_last


// convert data to string
const label_name_str = ds.extract(`label_name`).toString();
const label_name_match = label_name_str.match(/\w+(?=\W*$)/);
document.getElementById("label_name").innerHTML = label_name_match





},
            "commit": function anonymous(
) {
this.state.answer = this.parameters.answerairecc
}
          },
          "title": "Step 2: 2nd estimate without explanation"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "The correct jail time (court ruling) was 18 months. \u003Cbr\u003E\nYour final estimate was \u003Cspan id=\"final_estimate\"\u003E\u003C\u002Fspan\u003E months. \u003Cbr\u003E\n\u003Cspan id=\"label_name\"\u003E\u003C\u002Fspan\u003E's estimate was 16 months. ",
              "title": "Resolution of case:"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
const ds = this.options.datastore;

// extract saved data and name it
const final_estimate = ds.extract(`training_final_estimate`);
// convert data to string
const final_estimate_str = final_estimate.toString();
// grab last number in string
const final_estimate_last = final_estimate_str.match(/\d+(?=\D*$)/);
document.getElementById("final_estimate").innerHTML = final_estimate_last


// convert data to string
const label_name_str = ds.extract(`label_name`).toString();
const label_name_match = label_name_str.match(/\w+(?=\W*$)/);
document.getElementById("label_name").innerHTML = label_name_match

},
            "before:prepare": function anonymous(
) {
this.parameters.answer = this.state.answerairecc
}
          },
          "title": "Step 3: Resolution"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "We would like to know your current thoughts on ${this.parameters.label_name}'s support."
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "have faith in ${this.parameters.label_name}'s advice?",
                  "coding": "AT1"
                },
                {
                  "label": "believe ${this.parameters.label_name}'s advice more than yourself?",
                  "coding": "AT2"
                },
                {
                  "label": "confident that ${this.parameters.label_name} provides the best solution?",
                  "coding": "AT3"
                }
              ],
              "width": "7",
              "anchors": [
                "Not at all",
                null,
                null,
                null,
                null,
                null,
                "Very much"
              ],
              "label": "To what extent do you \u002F are you...",
              "name": "training_cogn_trust"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
const ds = this.options.datastore;

/* 
  represent label_name on screen
*/ 
// convert data to string
const label_name_str = ds.extract(`label_name`).toString();
const label_name_match = label_name_str.match(/\w+(?=\W*$)/);
// document.getElementById("label_name").innerHTML = label_name_match
this.parameters.label_name = label_name_match


}
          },
          "title": "Step 4: Trust"
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "You have completed the introduction! You are now ready to proceed with the cases.",
          "content": "You will be presented with \u003Cspan id=\"indefinite_article\"\u003E\u003C\u002Fspan\u003E \u003Cspan id=\"label_name\"\u003E\u003C\u002Fspan\u003E-powered sentencing prediction without explanation in the first part."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const ds = this.options.datastore;

this.parameters.counter = 0;
ds.set('counter', this.parameters.counter);
ds.commit('counter', this.parameters.counter);

},
        "run": function anonymous(
) {

const ds = this.options.datastore;

// label
const label_name_str = ds.extract(`label_name`).toString();
const label_name_match = label_name_str.match(/\w+(?=\W*$)/);
document.getElementById("label_name").innerHTML = label_name_match


if(label_name_match[0].valueOf() =="AI".valueOf()){
  document.getElementById("indefinite_article").innerHTML = "an"
}else{
  document.getElementById("indefinite_article").innerHTML = "a"
}



}
      },
      "title": "Ready to start"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "casetext": "The defendant caused two fires in a residential area in the night hours by setting fire to a scooter and a caravan. One of the fires could have spread further towards the adjacent homes. \u003Cbr\u003EThe probation service estimates the risk of recidivism as high. The defendant hid his\u002Fher motives from the court. He\u002Fshe also wanted to mislead the police by stating that someone else had set the fire.",
          "jailtime": 48,
          "casenumber": 1,
          "casetitle": "Arson",
          "explanation": "Analyzing the case, crucial elements include \"arson,\" \"residential area,\" \"risk of recidivism,\" \"hiding motives,\" and \"attempt to mislead the police.\" The defendant's deliberate setting of fires in a residential area during nighttime poses a severe threat to public safety and property. The high risk of recidivism, coupled with attempts to conceal motives and mislead authorities, aggravates the severity of the offense. Given these factors, a stringent legal response is necessary to address the danger posed by the defendant's actions and deter future criminal behavior.",
          "aiestimate": "47"
        },
        {
          "casetext": "The defendant conducted a home robbery and dressed in parcel delivery clothes to attack the resident with a knife. He\u002Fshe also committed a conspiracy with a second man who followed them into the home. \u003Cbr\u003EThe defendant has been convicted previously, but not for offenses similar to the present one.",
          "jailtime": 24,
          "casenumber": 2,
          "casetitle": "Attempted serious assault with others",
          "explanation": "Upon analyzing the case, key elements include \"home robbery,\" \"knife attack,\" and \"conspiracy.\" The defendant's actions, including dressing as a parcel delivery person to commit the robbery and conspiring with an accomplice, demonstrate premeditation and a threat to the safety of the resident. Despite prior convictions, they were not for offenses similar to the current charges. The seriousness of the crime and the potential danger posed necessitate a stringent legal response to ensure deterrence and protect the community from further harm.",
          "aiestimate": "21"
        },
        {
          "casetext": "The defendant, together with another person, deliberately caused serious bodily harm to the victim. The defendant and\u002For his\u002Fher co-perpetrator grabbed the victim and then stabbed and\u002For cut him in the upper right leg with a knife, although the intended crime was not completed. He\u002Fshe also deliberately transported and possessed approximately 40 XTC pills containing MDMA, which is a substance referred to in List I of the Opium Act. \u003Cbr\u003EThe defendant has been sentenced several times in recent years to unconditional prison sentences for property crimes and weapons possession.",
          "jailtime": 10,
          "casenumber": 3,
          "casetitle": "Aggravated assault + illegal possession of drugs",
          "explanation": "Analyzing the case, crucial elements include \"deliberate causing of serious bodily harm,\" \"stabbing with a knife,\" \"possession of MDMA pills,\" and \"prior convictions for property crimes and weapons possession.\" \u003Cbr\u003E The defendant's participation in a violent assault resulting in serious bodily harm, coupled with possession of illegal drugs, indicates a significant threat to public safety. Moreover, the defendant's history of multiple convictions for property crimes and weapons possession underscores a pattern of criminal behavior. \u003Cbr\u003E Given these factors, a comprehensive legal response is necessary to address the severity of the offenses and protect the community from further harm.",
          "aiestimate": "11"
        },
        {
          "casetext": "The defendant and one or more others were guilty of deliberately possessing and selling a large amount of cocaine over a period of three months. Besides, he\u002Fshe regularly delivered significant quantities of cocaine to various customers. The defendant also committed money laundering. He\u002Fshe sometimes received \u003E 100,000 euros amounts of money, counted them in his \u002F her home, and then delivered them again. \u003Cbr\u003EThe defendant has been sentenced several times in recent years to unconditional prison sentences for property crimes, weapons possession",
          "jailtime": 84,
          "casenumber": 4,
          "casetitle": "Selling drugs and money laundering",
          "explanation": "Analyzing the case, significant keywords include \"deliberate possession and sale of cocaine,\" \"regular delivery to customers,\" \"money laundering,\" \"large sums of money,\" and \"prior convictions for property crimes and weapons possession.\" \u003Cbr\u003E The defendant's involvement in the deliberate trafficking of cocaine, coupled with money laundering activities, demonstrates a flagrant disregard for the law and poses significant risks to public health and safety. Moreover, the defendant's history of multiple convictions for property crimes and weapons possession underscores a pattern of criminal behavior. \u003Cbr\u003E Given these factors, a robust legal response is imperative to address the severity of the offenses and deter future criminal conduct.",
          "aiestimate": "79"
        },
        {
          "casetext": "The defendant deliberately caused an explosion, creating a danger to property, life, and the risk of serious bodily injury to another person. The defendant also possessed a weapon (an improvised explosive device). \u003Cbr\u003EThe defendant has previously been sentenced to a long prison term for similar offenses. He\u002Fshe is not guilty of possessing an automatic weapon, and soft and hard drugs do not play a role in this case.",
          "jailtime": 40,
          "casenumber": 5,
          "casetitle": "Creating explosion + weapon possession",
          "explanation": "Analyzing the case, crucial aspects include \"deliberate explosion,\" \"danger to property and life,\" \"danger of serious bodily injury,\" \"possession of improvised explosive device,\" and \"prior conviction for similar offenses.\" \u003Cbr\u003E The defendant's intentional actions, involving an explosion and possession of a weapon, pose significant risks to public safety and indicate a pattern of disregard for the law. Despite no involvement with automatic weapons or drugs, the defendant's prior conviction for similar offenses underscores the seriousness of the situation. \u003C\u002Fbr\u003E Given these factors, a stringent legal response is necessary to address the repeated endangerment caused by the defendant's actions.",
          "aiestimate": "45"
        },
        {
          "casetext": "The defendant, as the de facto director of a company, failed to maintain proper business administration and did not comply with the legal obligation to immediately submit proper administration to the curator. The defendant deliberately did not declare bankruptcy and failed to ensure compliance with the legal obligations to keep records and the associated data carriers. Additionally, the defendant deliberately violated the obligations of the Disability Insurance Act for self-employed persons. \u003Cbr\u003EThe defendant has recently been convicted of several offenses.",
          "jailtime": 6,
          "casenumber": 6,
          "casetitle": "Failure to maintain proper business administration, corruption",
          "explanation": "Having examined the case, key elements include \"failure to maintain proper business administration,\" \"failure to submit administration to the curator,\" \"failure to announce bankruptcy,\" \"violation of record-keeping obligations,\" and \"deliberate violation of Disability Insurance Act.\"\u003Cbr\u003E  The defendant, acting as a de facto director, displayed a deliberate disregard for legal responsibilities, affecting business transparency and adherence to regulatory standards. \u003Cbr\u003E Given the recent convictions and the seriousness of the offenses, a comprehensive legal response is warranted to address the defendant's repeated non-compliance with the law.",
          "aiestimate": "7"
        },
        {
          "casetext": "The defendant purchased a very large number of bots over a long period of time. These bots allowed the defendant to freely access the login details and passwords of victims. The defendant always had the malicious intention to use this data in a criminal manner. The defendant actually entered the computers of two victims using the bots and subsequently stole a total of 93,700 euros. In addition, the defendant possessed a large amount of data intended for phishing. \u003Cbr\u003EThe defendant has an adjustment disorder with a mixed disorder of emotions and (impulsive) behavior.",
          "jailtime": 48,
          "casenumber": 7,
          "casetitle": "Hacking + stealing personal information",
          "explanation": "Having examined the case, keywords like \"purchase of bots,\" \"accessing login details,\" \"malicious intent,\" \"computer intrusion,\" \"theft of funds,\" and \"data for phishing\" emerged.\u003Cbr\u003E  Despite the defendant's adjustment disorder, their deliberate cybercrimes inflicted significant financial losses and posed grave threats. \u003Cbr\u003E Balancing accountability and mental health considerations, I recommend a sentence reflecting both the severity of the crimes and the need for targeted psychiatric intervention.",
          "aiestimate": "49"
        },
        {
          "casetext": "The defendant is guilty of preparing, together with others, a life-threatening form of human smuggling (via the Channel Route) by acquiring a large quantity of nautical goods, means of transport and space. \u003Cbr\u003E Insufficient insight has been gained into the defendant's psychological functioning, including possible psychopathology.",
          "jailtime": 15,
          "casenumber": 8,
          "casetitle": "Preparing human trafficking",
          "explanation": "Having examined the case, significant keywords include \"preparing human smuggling,\" \"acquiring nautical goods and transport means,\" and \"insufficient insight into defendant's psychological functioning.\" \u003Cbr\u003E The defendant's involvement in planning life-threatening human smuggling via the Channel Route reflects a serious criminal endeavor with potentially fatal consequences.\u003Cbr\u003E Despite lacking clarity on the defendant's psychological state, the gravity of the offense necessitates a thorough investigation and appropriate legal action.",
          "aiestimate": "17"
        },
        {
          "casetext": "The defendant is guilty of manslaughter. The defendant took his\u002Fher father's life in a very violent manner by hitting him with a bottle of corn wine and stabbing him in the torso with a knife. He\u002Fshe also pressed a pillow over his\u002Fher father's mouth and nose.",
          "jailtime": 108,
          "casenumber": 9,
          "casetitle": "Manslaughter",
          "explanation": "Analyzing the case, significant elements include \"manslaughter,\" \"violent manner,\" \"use of a bottle and knife,\" and \"pressing a pillow over the victim's mouth and nose.\" The defendant's actions resulted in the tragic loss of their father's life through brutal means, involving both blunt force and stabbing. Such violence indicates a severe breach of legal and moral standards. Given the gravity of the offense and the manner in which it was committed, a thorough legal response is necessary to ensure justice and uphold societal safety and norms.",
          "aiestimate": "117"
        },
        {
          "casetext": "The defendant is convicted of attempted manslaughter, two attempts of serious assault, and two simple assaults. Over a period of several months, the defendant committed five violent crimes during enforcement and supervision. The defendant forcefully kicked the victim in the head and body several times with a shod foot. This occurred while the complainant lay defenseless—and eventually apparently unconscious—on the ground. The defendant then left him\u002Fher unconscious.",
          "jailtime": 48,
          "casenumber": 10,
          "casetitle": "Attempted manslaughter + serious assault",
          "explanation": "Having examined the case, significant keywords include \"attempted manslaughter,\" \"serious assault,\" \"simple assault,\" \"multiple violent crimes,\" and \"forceful kicking of defenseless victim.\" \u003Cbr\u003E The defendant's pattern of violent behavior, including kicking the complainant repeatedly while defenseless on the ground, reflects a clear disregard for human life and safety. \u003Cbr\u003E The severity of the offenses, especially attempted manslaughter, demands a robust legal response to ensure accountability and protect the community from further harm.",
          "aiestimate": "47"
        },
        {
          "casetext": "The defendant is guilty of intentional money laundering through possession of €185,140.00, 180 British pounds, and 222 American dollars, as well as 226 telephones and 2 laptops. Additionally, the defendant failed to comply with the obligation to report a sum of €185,140.00. \u003Cbr\u003EThe defendant was guilty of embezzlement twice within one year while employed by two different employers. Furthermore, the defendant was previously convicted by the criminal court for committing violent crimes.",
          "jailtime": 12,
          "casenumber": 11,
          "casetitle": "Money Laundering",
          "explanation": "Upon reviewing the case, significant details emerge, including \"intentional money laundering,\" \"possession of a substantial sum of money and electronic devices\", and \"failure to report the funds\".\u003Cbr\u003E  Additionally, the defendant's prior convictions for \"embezzlement\" and \"committing violent crimes\" further compound the severity of the offense. \u003Cbr\u003E The deliberate actions to conceal illicit funds, coupled with a pattern of criminal behavior, warrant a robust legal response to uphold justice and deter future criminal conduct.",
          "aiestimate": "13"
        },
        {
          "casetext": "The defendant was convicted for complicity in preparatory acts for murder with others. The evidence shows that the defendant accepted the assignment to liquidate the intended target, had already received a down payment, and carried out actions for this liquidation. During the charged period, the defendant used a SKY device obtained for this purpose, through which he\u002Fshe could secretly communicate with the co-defendant about the intended target and the planning of the murder. The defendant also arranged reconnaissance, shared photos, possessed a firearm, and, together with his\u002Fher co-defendants, had access to getaway cars and false license plates.",
          "jailtime": 60,
          "casenumber": 12,
          "casetitle": "Preparing murder",
          "explanation": "Upon reviewing the case, it's evident that the defendant was convicted for \"complicity in preparatory acts for murder\" with others.\u003Cbr\u003E  Such actions contribute to societal unrest and insecurity, particularly considering the potential for bystanders to be inadvertently involved or witness violent events. The severity of the offense, coupled with the extensive planning and coordination involved, underscores the gravity of the situation. \u003Cbr\u003E Therefore, the recommended duration of punishment reflects the seriousness of the crime and the level of intent demonstrated by the defendant.",
          "aiestimate": "58"
        },
        {
          "casetext": "The defendant deliberately caused an explosion by throwing a hand grenade into a home. He\u002Fshe was also guilty of possessing weapons, including a hand grenade, firearms, and associated ammunition; preparing for murder and serious assault on multiple persons; and being complicit in committing embezzlement. \u003Cbr\u003EThe defendant is suffering from health problems for which he\u002Fshe is being treated abroad.",
          "jailtime": 96,
          "casenumber": 13,
          "casetitle": "Letting grenade explode, preparing murder, with others",
          "explanation": "Upon reviewing the case, key elements include \"deliberate explosion with a hand grenade,\" \"possession of weapons (hand grenade, firearms, and ammunition),\" \"preparation for murder and serious assault,\" and \"complicity in embezzlement.\" \u003Cbr\u003E The defendant's involvement in these serious offenses demonstrates a clear disregard for public safety and the law. Such behavior warrants a robust legal response to ensure accountability and prevent future harm. \u003Cbr\u003E Therefore, given the severity of the charges, I recommend an appropriate sentence.",
          "aiestimate": "105"
        },
        {
          "casetext": "The defendant is guilty of complicity in a ruthless violent robbery, during which thousands of euros were taken from the victim. The victim was subjected to a very humiliating treatment and was in fear of death. He\u002Fshe spent a whole night naked in the toilet while blindfolded and duct-taped, threatened with a knife, and abused. The material damage amounts to €10,546.24.\u003Cbr\u003EThe defendant has previously been convicted for similar criminal offenses.",
          "jailtime": 18,
          "casenumber": 14,
          "casetitle": "Violent robbery",
          "explanation": "Upon reviewing the case, the defendant is guilty of \"complicity in a ruthless violent robbery\" where the victim endured severe humiliation and fear of death.\u003Cbr\u003E  The victim's harrowing experience, including being blindfolded, duct-taped, threatened with a knife, and subjected to abuse, underscores the severity of the crime. The material damage incurred further emphasizes the significant impact of the robbery. \u003Cbr\u003E Given the egregious nature of the offense and its traumatic consequences, a stringent legal response is warranted to ensure justice for the victim and deter future criminal behavior.",
          "aiestimate": "15"
        },
        {
          "casetext": "The defendant committed smuggling by deliberately violating a prohibition contained in the Excise Duty Act. The defendant was guilty of deliberately possessing and storing at least 2,849,000 cigarettes without paying excise duty.",
          "jailtime": 9,
          "casenumber": 15,
          "casetitle": "Illegal possession of cigarattes\u002Fsmuggling",
          "explanation": "Considering the case, significant elements include \"smuggling\" and \"deliberate violation of Excise Duty Act prohibition.\" \u003Cbr\u003E The defendant's deliberate possession and storage of at least 2,849,000 cigarettes without excise duty signify a flagrant disregard for legal regulations. Such actions not only undermine governmental revenue but also pose potential health risks and facilitate illicit trade.\u003Cbr\u003E  Given the severity of the offense, a robust legal response is necessary to uphold the law and deter future smuggling activities.",
          "aiestimate": "9"
        },
        {
          "casetext": "The defendant was convicted of possession of firearms and ammunition (a pistol and bullet cartridge). He\u002Fshe also possessed cocaine (49.4 grams and 4.3 grams).",
          "jailtime": 8,
          "casenumber": 16,
          "casetitle": "Weapon and drug possession",
          "explanation": "Considering the case, significant elements include \"accepting gifts from detainees,\" \"smuggling telephones and drugs,\" \"embezzlement of handcuffs,\" and \"possession of a gas pistol.\" \u003Cbr\u003E The defendant's actions as a penitentiary worker constitute serious breaches of trust, undermining institutional integrity and public safety. \u003Cbr\u003E Therefore, the recommended duration aims to deter such misconduct and ensure accountability while safeguarding public welfare.",
          "aiestimate": "8"
        }
      ],
      "sample": {
        "mode": "draw",
        "n": ""
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Case loop ",
      "indexParameter": "counter",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "Case ${this.parameters.counter+1}: ${this.parameters.casetitle}",
                "content": "${this.parameters.casetext}"
              },
              {
                "required": true,
                "type": "text",
                "title": "Please estimate the jail time below:",
                "content": ""
              },
              {
                "required": true,
                "type": "input",
                "attributes": {
                  "type": "number"
                },
                "name": "initialestimate"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Step 1: Initial estimate"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "Case ${this.parameters.counter+1}: ${this.parameters.casetitle}",
                "content": "${this.parameters.casetext}"
              },
              {
                "required": true,
                "type": "text",
                "title": "Calculated estimate from \u003Cspan id=\"label_name\"\u003E\u003C\u002Fspan\u003E${this.parameters.explanationtitle}: \u003Cbr\u003E ${this.parameters.aiestimate} months",
                "content": "${this.parameters.explanationcontent}"
              },
              {
                "required": true,
                "type": "input",
                "label": "Please confirm \u002F update your jail time estimate below (your initial estimate was \u003Cspan id=\"previous_estimate\"\u003E\u003C\u002Fspan\u003E months):",
                "attributes": {
                  "type": "number"
                },
                "name": "secondestimate"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// Previous estimate retrieval
// define datastore
const ds = this.options.datastore;
// extract saved data and name it
const initial_estimate = ds.extract(`initialestimate`);
// convert data to string
const initial_estimate_str = initial_estimate.toString();
// grab last number in string
const initial_estimate_last = initial_estimate_str.match(/\d+(?=\D*$)/);
// print it in the html of the survey
document.getElementById("previous_estimate").innerHTML = initial_estimate_last

// convert data to string
const label_name_str = ds.extract(`label_name`).toString();
const label_name_match = label_name_str.match(/\w+(?=\W*$)/);
document.getElementById("label_name").innerHTML = label_name_match


},
              "before:prepare": function anonymous(
) {
const ds = this.options.datastore;

//ai estimate
// accuracy = (this.random.range(-15,16)/100)
// accuracy = 1 + accuracy
// this.parameters.estimate_accurate = this.parameters.jailtime * accuracy
// this.parameters.ai_estimate = Math.round(this.parameters.estimate_accurate)

// ds.set('ai_estimate', this.parameters.ai_estimate)
// ds.commit('ai_estimate', this.parameters.ai_estimate)


//explanation content
this.parameters.notexplain = (this.parameters.counter+1) < 9;
if (this.parameters.notexplain == 1) {
  this.parameters.explanationcontent = " ";
  this.parameters.explanationtitle = "";
} else{
  this.parameters.explanationcontent = this.parameters.explanation;
  this.parameters.explanationtitle = ", with explanation";
}



},
              "commit": function anonymous(
) {
this.state.answer = this.parameters.answerairecc
}
            },
            "title": "Step 2: 2nd estimate "
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "Case ${this.parameters.counter+1}: ${this.parameters.casetitle}",
                "content": "${this.parameters.casetext}"
              },
              {
                "required": true,
                "type": "text",
                "title": "Resolution of case:",
                "content": "The correct jail time (court ruling) was ${this.parameters.jailtime} months. \u003Cbr\u003E\nYour final estimate was \u003Cspan id=\"final_estimate\"\u003E\u003C\u002Fspan\u003E months. \u003Cbr\u003E\n\u003Cspan id=\"label_name\"\u003E\u003C\u002Fspan\u003E's estimate was ${this.parameters.aiestimate} months. "
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// Previous estimate retrieval
// define datastore
const ds = this.options.datastore;
// extract saved data and name it
const second_estimate = ds.extract(`secondestimate`);
// convert data to string
const second_estimate_str = second_estimate.toString();
// grab last number in string
const second_estimate_last = second_estimate_str.match(/\d+(?=\D*$)/);
// print it in the html of the survey
document.getElementById("final_estimate").innerHTML = second_estimate_last


// label name
const label_name_str = ds.extract(`label_name`).toString();
const label_name_match = label_name_str.match(/\w+(?=\W*$)/);
document.getElementById("label_name").innerHTML = label_name_match


}
            },
            "title": "Step 3: Resolution"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "content": "We would like to know your current thoughts on ${this.parameters.label_name}'s support."
              },
              {
                "required": true,
                "type": "likert",
                "items": [
                  {
                    "label": "have faith in ${this.parameters.label_name}'s advice?",
                    "coding": "AT1"
                  },
                  {
                    "label": "believe ${this.parameters.label_name}'s advice more than yourself?",
                    "coding": "AT2"
                  },
                  {
                    "label": "confident that ${this.parameters.label_name} provides the best solution?",
                    "coding": "AT3"
                  }
                ],
                "width": "7",
                "anchors": [
                  "Not at all",
                  null,
                  null,
                  null,
                  null,
                  null,
                  "Very much"
                ],
                "label": "To what extent do you \u002F are you...",
                "name": "affect_cogn_trust"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
const ds = this.options.datastore;

/* 
  represent label_name on screen
*/ 
// convert data to string
const label_name_str = ds.extract(`label_name`).toString();
const label_name_match = label_name_str.match(/\w+(?=\W*$)/);
// document.getElementById("label_name").innerHTML = label_name_match
this.parameters.label_name = label_name_match


}
            },
            "title": "Step 4: Trust",
            "skip": "${(this.parameters.counter+1)%4!=0}",
            "tardy": true
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "You are half way in this part now. Hang in there!"
              },
              {
                "required": true,
                "type": "image",
                "src": "${ this.files[\"hang-in-there.png\"] }",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "right",
            "files": {
              "hang-in-there.png": "embedded\u002Ff52b42c5e7e67b58aad29296ca07fa5fa4f20fb53ccc3069d0a90c4538ea3cca.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Hang in there",
            "tardy": true,
            "skip": "${(this.parameters.counter+1)%4!=0 || (this.parameters.counter+1)%8==0 || (this.parameters.counter+1)%16==0}"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "content": "",
                "title": "Well done! You are half-way. Let’s see if you can do better in the next set of cases. In the second part, \u003Cspan id=\"label_name\"\u003E\u003C\u002Fspan\u003E will help you by offering explanations for its predictions"
              },
              {
                "required": true,
                "type": "image",
                "src": "${ this.files[\"well-done.jpeg\"] }",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "right",
            "files": {
              "well-done.jpeg": "embedded\u002F20685bbe5a2deb67388dda8c16951cabad459bc103ef16c73dd4b3959b00b3f0.jpeg"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// Previous estimate retrieval
// define datastore
const ds = this.options.datastore;

// label name
const label_name_str = ds.extract(`label_name`).toString();
const label_name_match = label_name_str.match(/\w+(?=\W*$)/);
document.getElementById("label_name").innerHTML = label_name_match

}
            },
            "title": "Transition",
            "tardy": true,
            "skip": "${(this.parameters.counter+1)%8!=0 || (this.parameters.counter+1)%16==0}"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Congratulations, you solved all legal cases!",
          "content": "We will follow up with some last questions before you are finished with our study."
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"congrats.gif\"] }",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "well done.pic.jpg": "embedded\u002F70d2d13eb73296a09a8d880f3eba486a590dae05bb5eb1f247e9b76532b2cdc9.jpg",
        "congrats.gif": "embedded\u002Feed16199780779718ba8aff6b4916a44565967132b9e6664d3ea4abf5bbf5bec.gif"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "You are done"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "",
          "content": "The following questions concern your demographics:"
        },
        {
          "required": true,
          "type": "input",
          "label": "What is your AGE?",
          "attributes": {
            "type": "number"
          },
          "name": "age"
        },
        {
          "required": true,
          "type": "radio",
          "label": "What GENDER are you?",
          "options": [
            {
              "label": "Female",
              "coding": "0"
            },
            {
              "label": "Male",
              "coding": "1"
            },
            {
              "label": "Transgender",
              "coding": "2"
            },
            {
              "label": "Non-binary",
              "coding": "3"
            },
            {
              "label": "Other",
              "coding": "4"
            },
            {
              "label": "Prefer not to answer",
              "coding": "5"
            }
          ],
          "name": "gender"
        },
        {
          "required": true,
          "type": "radio",
          "label": "What is the highest level of EDUCATION you have attained?",
          "options": [
            {
              "label": "Doctorate Degree",
              "coding": "0"
            },
            {
              "label": "Master’s Degree",
              "coding": "1"
            },
            {
              "label": "Bachelor’s Degree",
              "coding": "2"
            },
            {
              "label": "Associate Degree",
              "coding": "3"
            },
            {
              "label": "Trade \u002F technical \u002F vocational training",
              "coding": "4"
            },
            {
              "label": "High school \u002F college graduate, diploma or equivalent",
              "coding": "5"
            },
            {
              "label": "Some high school",
              "coding": "6"
            },
            {
              "label": "Prefer not to answer.",
              "coding": "7"
            }
          ],
          "name": "education"
        },
        {
          "required": true,
          "type": "radio",
          "label": "What best describes your current occupation?",
          "options": [
            {
              "label": "Student",
              "coding": "0"
            },
            {
              "label": "Unemployed",
              "coding": "1"
            },
            {
              "label": "Unskilled manual labor",
              "coding": "2"
            },
            {
              "label": "Skilled manual labor",
              "coding": "3"
            },
            {
              "label": "Professional labor",
              "coding": "4"
            },
            {
              "label": "Prefer not to say",
              "coding": "5"
            }
          ],
          "name": "occupation"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Demo "
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "The following questions concern your opinion on several topics:"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "I consider my knowledge of AI to be quite advanced.",
              "coding": "exai1"
            },
            {
              "label": "This is an attention check. Please choose “strongly disagree” as the answer.",
              "coding": "attention3"
            },
            {
              "label": "I believe that I am well-informed about how AI can be applied.",
              "coding": "exai2"
            },
            {
              "label": "I understand the inner workings of AI systems.",
              "coding": "exai3"
            }
          ],
          "width": "5",
          "anchors": [
            "Strongly disagree",
            "",
            "",
            "",
            "Strongly agree"
          ],
          "name": "expertise_ai",
          "label": "How is your affinity for AI?"
        },
        {
          "required": true,
          "type": "slider",
          "label": "How would you rate your jurisdictional and judicial knowledge? ",
          "attributes": {
            "min": "1",
            "max": "10",
            "step": "1"
          },
          "name": "legal_expertise"
        },
        {
          "required": true,
          "type": "slider",
          "label": "How is your English language proficiency?",
          "attributes": {
            "min": "1",
            "max": "10",
            "step": "1"
          },
          "name": "language_expertise"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Expertise"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "The following questions concern your opinion on several topics:"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "When I have to make a decision with an uncertain outcome, I go for the safe option.",
              "coding": "risk1"
            },
            {
              "label": "Despite the chances of failing, it is important to stick to my own decision.",
              "coding": "risk2"
            },
            {
              "label": "It is important to me to maintain control over my decisions.",
              "coding": "risk3"
            },
            {
              "label": "I enjoy taking risks in most aspects of my life.",
              "coding": "risk4"
            },
            {
              "label": "This is an attention check. Please choose “strongly agree” as the answer.",
              "coding": "attention4"
            }
          ],
          "width": "5",
          "anchors": [
            "Strongly disagree",
            "",
            "",
            "",
            "Strongly agree"
          ],
          "name": "risk_aversion"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Risk"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Thank you for taking part in the study !",
          "content": "This is the end of the study, and we want to give you some additional information."
        },
        {
          "required": true,
          "type": "text",
          "content": "We told you that the study aims to gain insights into human-AI interactions in the context of legal decision-making. In specific, we tested to what extent trust is affected by labels of AI and whether there exists explanation. Therefore, we randomly placed you into one of the two groups: 1) With ChatGPT label, and 2) without ChatGPT label. All cases you solved were classified beforehand in the context of complexity. "
        },
        {
          "required": true,
          "type": "text",
          "title": "IMPORTANT! Do not close this window yet!",
          "content": "Prolific participants need to continue to the next page to receive the completion code and your monetary rewards.\n"
        },
        {
          "required": true,
          "type": "text",
          "content": "In case you have more questions about this study, please contact Hanmeng Wang (h.wang1@student.tue.nl).  If you want to receive a summary of the results of this study, please leave your email below.  Your contact information will be removed once we have sent the result to you."
        },
        {
          "required": false,
          "type": "input",
          "label": "Enter your email here (optional)",
          "name": "email",
          "attributes": {
            "type": "email"
          }
        },
        {
          "required": true,
          "type": "text",
          "content": "Do you have any FEEDBACK for us? We appreciate your input via the box below!"
        },
        {
          "required": false,
          "type": "input",
          "label": "Enter your feedback here (optional)",
          "name": "Feedback"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "End"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Prolific study code (Reimbursement)",
          "content": "Please copy the code below and paste it on Prolific as proof of your full participation in the study:\n"
        },
        {
          "required": true,
          "type": "text",
          "content": "",
          "title": "C6CGQOFJ"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Completion code"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Thank you for your participation!",
          "content": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Thank you"
    }
  ]
})

// Let's go!
study.run()