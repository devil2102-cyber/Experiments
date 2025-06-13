function addnewexperienceField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control', 'mt-2', 'experienceField');
    newNode.setAttribute('rows', '3');
    newNode.setAttribute('name', 'experience[]');
    newNode.setAttribute('placeholder', 'Describe your work experience');
    // Append after the main experience field
    let container = document.getElementById('experienceField').parentNode;
    container.appendChild(newNode);
}

function addneweducationField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control', 'mt-2', 'educationField');
    newNode.setAttribute('rows', '2');
    newNode.setAttribute('name', 'education[]');
    newNode.setAttribute('placeholder', 'Enter your education here');
    let container = document.getElementById('educationField').parentNode;
    container.appendChild(newNode);

}

function generateResume() {
    // Get basic information
    var name = document.getElementById('nameField')?.value || '';
    var email = document.getElementById('emailField')?.value || '';
    var phone = document.getElementById('phoneField')?.value || '';
    var address = document.getElementById('addressField')?.value || '';
    var linkedin = document.getElementById('linkedinField')?.value || '';
    var github = document.getElementById('githubField')?.value || '';
    var dob = document.getElementById('dobField')?.value || '';
    var languages = document.getElementById('languagesField')?.value || '';
    var hobbies = document.getElementById('hobbiesField')?.value || '';
    var profession = document.getElementById('professionField')?.value || '';
    var skills = document.getElementById('skillsField')?.value || '';
    var certifications = document.getElementById('certificationsField')?.value || '';
    var website = document.getElementById('websiteField')?.value || '';
    var achievements = document.getElementById('achievementsField')?.value || '';
    var personalStatement = document.getElementById('personalStatementField')?.value || '';
    // Get main experience and education
    var mainExperience = document.getElementById('experienceField')?.value || '';
    var mainEducation = document.getElementById('educationField')?.value || '';
    var mainProjects = document.getElementById('projectsField')?.value || '';
    // Get additional dynamic fields
    var additionalExperience = document.querySelectorAll('textarea[name="experience[]"]');
    var additionalEducation = document.querySelectorAll('textarea[name="education[]"]');
    var additionalProjects = document.querySelectorAll('textarea[name="projects[]"]');
    
    // Start building resume content
    var resumeContent = `
        <div id="resumeContentToPrint" style="max-width: 900px; margin: 0 auto; padding: 40px 52px 36px 52px; font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'Liberation Sans', sans-serif; background: #f7fafc; color: #23272f; border-radius: 20px; box-shadow: 0 8px 32px rgba(44,62,80,0.13);">
            <div style="text-align: center; border-bottom: 3px solid #667eea; padding-bottom: 28px; margin-bottom: 36px;">
                <h1 style="margin: 0; color: #1e293b; font-size: 2.9rem; font-weight: 700; letter-spacing: 1.2px;">${name}</h1>
                <h3 style="margin: 10px 0 0 0; color: #3b82f6; font-size: 1.35rem; font-weight: 500; letter-spacing: 0.6px;">${profession}</h3>
            </div>
            <div style="display: flex; justify-content: space-between; gap: 36px; margin-bottom: 32px; flex-wrap: wrap; font-size: 1.08rem;">
                <div style="flex:1; min-width: 220px;">
                    <p style="margin: 0 0 7px 0;"><span style="font-weight:600; color:#334155;">Email:</span> <span style="color:#0ea5e9;">${email}</span></p>
                    <p style="margin: 0 0 7px 0;"><span style="font-weight:600; color:#334155;">Phone:</span> <span style="color:#0ea5e9;">${phone}</span></p>
                    ${address ? `<p style="margin: 0 0 7px 0;"><span style="font-weight:600; color:#334155;">Address:</span> <span style="color:#64748b;">${address}</span></p>` : ''}
                    
                </div>
                <div style="flex:1; min-width: 220px;">
                    ${linkedin ? `<p style="margin: 0 0 7px 0;"><span style="font-weight:600; color:#334155;">LinkedIn:</span> <a href="${linkedin}" style="color:#2563eb; text-decoration:underline;">${linkedin}</a></p>` : ''}
                    ${github ? `<p style="margin: 0 0 7px 0;"><span style="font-weight:600; color:#334155;">GitHub:</span> <a href="${github}" style="color:#2563eb; text-decoration:underline;">${github}</a></p>` : ''}
                    ${website ? `<p style="margin: 0 0 7px 0;"><span style="font-weight:600; color:#334155;">Website:</span> <a href="${website}" style="color:#2563eb; text-decoration:underline;">${website}</a></p>` : ''}
                </div>
            </div>`;
    
    // Personal Statement
    if (personalStatement) {
        resumeContent += `
            <div style="margin-bottom: 26px;">
                <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 7px; font-size: 1.23rem; font-weight: 600; margin-bottom: 9px;">Personal Statement</h2>
                <p style="margin:0; color:#334155; font-size:1.09rem; line-height:1.7;">${personalStatement}</p>
            </div>`;
    }

    // Skills
    if (skills) {
    resumeContent += `
        <div style="margin-bottom: 26px;">
            <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 7px; font-size: 1.23rem; font-weight: 600; margin-bottom: 9px;">Skills</h2>
            <ul style="margin:0; padding-left:18px; color:#334155; font-size:1.09rem; line-height:2.0; list-style:square inside;">
                ${skills.split('\n').map(line => line.trim() ? `<li>${line}</li>` : '').join('')}
            </ul>
        </div>`;
}

    // Experience
    if (mainExperience || additionalExperience.length > 0) {
        resumeContent += `
            <div style="margin-bottom: 26px;">
                <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 7px; font-size: 1.23rem; font-weight: 600; margin-bottom: 9px;">Work Experience</h2>
                <ul style="margin:0; padding-left:18px; color:#334155; font-size:1.09rem; line-height:1.7; list-style:disc inside;">`;
        if (mainExperience) {
            mainExperience.split('\n').forEach(function(line) {
                if (line.trim()) resumeContent += `<li>${line}</li>`;
            });
        }
        additionalExperience.forEach(function(exp) {
            if (exp.value.trim()) resumeContent += `<li>${exp.value}</li>`;
        });
        resumeContent += `</ul></div>`;
    }

    // Education
    if (mainEducation || additionalEducation.length > 0) {
        resumeContent += `
            <div style="margin-bottom: 26px;">
                <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 7px; font-size: 1.23rem; font-weight: 600; margin-bottom: 9px;">Education</h2>
                <ul style="margin:0; padding-left:18px; color:#334155; font-size:1.09rem; line-height:1.7; list-style:disc inside;">`;
        if (mainEducation) {
            mainEducation.split('\n').forEach(function(line) {
                if (line.trim()) resumeContent += `<li>${line}</li>`;
            });
        }
        additionalEducation.forEach(function(edu) {
            if (edu.value.trim()) resumeContent += `<li>${edu.value}</li>`;
        });
        resumeContent += `</ul></div>`;
    }

    // Projects
    if (mainProjects || additionalProjects.length > 0) {
        resumeContent += `
            <div style="margin-bottom: 26px;">
                <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 7px; font-size: 1.23rem; font-weight: 600; margin-bottom: 9px;">Projects</h2>
                <ul style="margin:0; padding-left:18px; color:#334155; font-size:1.09rem; line-height:1.7; list-style:disc inside;">`;
        if (mainProjects) {
            mainProjects.split('\n').forEach(function(line) {
                if (line.trim()) resumeContent += `<li>${line}</li>`;
            });
        }
        additionalProjects.forEach(function(proj) {
            if (proj.value.trim()) resumeContent += `<li>${proj.value}</li>`;
        });
        resumeContent += `</ul></div>`;
    }

    // Certifications
    if (certifications) {
        resumeContent += `
            <div style="margin-bottom: 26px;">
                <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 7px; font-size: 1.23rem; font-weight: 600; margin-bottom: 9px;">Certifications</h2>
                <ul style="margin:0; padding-left:18px; color:#334155; font-size:1.09rem; line-height:1.7; list-style:square inside;">
                    ${certifications.split(',').map(cert => `<li>${cert.trim()}</li>`).join('')}
                </ul>
            </div>`;
    }

    // Achievements
    if (achievements) {
        resumeContent += `
            <div style="margin-bottom: 26px;">
                <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 7px; font-size: 1.23rem; font-weight: 600; margin-bottom: 9px;">Achievements</h2>
                <ul style="margin:0; padding-left:18px; color:#334155; font-size:1.09rem; line-height:1.7; list-style:square inside;">
                    ${achievements.split(',').map(ach => `<li>${ach.trim()}</li>`).join('')}
                </ul>
            </div>`;
    }

    // Additional Information
    var additionalInfo = [];
    if (languages) additionalInfo.push(`<span style='font-weight:600; color:#334155;'>Languages:</span> <span style='color:#0ea5e9;'>${languages}</span>`);
    if (hobbies) additionalInfo.push(`<span style='font-weight:600; color:#334155;'>Hobbies:</span> <span style='color:#0ea5e9;'>${hobbies}</span>`);
    if (additionalInfo.length > 0) {
        resumeContent += `
            <div style="margin-bottom: 26px;">
                <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 7px; font-size: 1.23rem; font-weight: 600; margin-bottom: 9px;">Additional Information</h2>
                <ul style="margin:0; padding-left:18px; color:#334155; font-size:1.09rem; line-height:1.7; list-style:circle inside;">
                    ${additionalInfo.map(info => `<li>${info}</li>`).join('')}
                </ul>
            </div>`;
    }

    resumeContent += `</div>`;
    
   // Create or update resume output div
var resumeOutput = document.getElementById('resumeOutput');
if (!resumeOutput) {
    resumeOutput = document.createElement('div');
    resumeOutput.id = 'resumeOutput';
    resumeOutput.style.marginTop = '30px';
    resumeOutput.style.paddingBottom = '30px'; // Added bottom margin
    resumeOutput.style.padding = '20px';
    resumeOutput.style.border = '1px solid #ccc';
    resumeOutput.style.borderRadius = '5px';
    resumeOutput.style.backgroundColor = '#f9f9f9';
    document.body.appendChild(resumeOutput);
}

resumeOutput.innerHTML = resumeContent;
resumeOutput.scrollIntoView({ behavior: 'smooth' });

    // PDF GENERATION
    // Load jsPDF and html2canvas from CDN if not already loaded
    if (typeof window.jspdf === 'undefined') {
        var script1 = document.createElement('script');
        script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        document.head.appendChild(script1);
    }
    if (typeof window.html2canvas === 'undefined') {
        var script2 = document.createElement('script');
        script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        document.head.appendChild(script2);
    }

    // Wait for libraries to load, then generate PDF
   var resumeOutput = document.getElementById('resumeOutput');
if (!resumeOutput) {
    resumeOutput = document.createElement('div');
    resumeOutput.id = 'resumeOutput';
    resumeOutput.style.marginTop = '30px';
    resumeOutput.style.paddingBottom = '30px'; // Added bottom margin
    resumeOutput.style.padding = '20px';
    resumeOutput.style.border = '1px solid #ccc';
    resumeOutput.style.borderRadius = '5px';
    resumeOutput.style.backgroundColor = '#f9f9f9';
    document.body.appendChild(resumeOutput);
}

resumeOutput.innerHTML = resumeContent;
resumeOutput.scrollIntoView({ behavior: 'smooth' });

    // PDF GENERATION
    // Load jsPDF and html2canvas from CDN if not already loaded
    if (typeof window.jspdf === 'undefined') {
        var script1 = document.createElement('script');
        script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        document.head.appendChild(script1);
    }
    if (typeof window.html2canvas === 'undefined') {
        var script2 = document.createElement('script');
        script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        document.head.appendChild(script2);
    }

    // Wait for libraries to load, then generate PDF
    setTimeout(function() {
        if (typeof window.jspdf !== 'undefined' && typeof window.html2canvas !== 'undefined') {
            var resumeDiv = document.getElementById('resumeContentToPrint');
            window.html2canvas(resumeDiv, { scale: 2, backgroundColor: '#fff' }).then(function(canvas) {
                var imgData = canvas.toDataURL('image/png');
                var pdf = new window.jspdf.jsPDF('p', 'mm', 'a4');
                var imgWidth = 210;
                var pageHeight = 295;
                var imgHeight = canvas.height * imgWidth / canvas.width;
                var heightLeft = imgHeight;
                var position = 0;
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
                while (heightLeft > 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }
                var filename = (name ? name.replace(/[^a-z0-9]/gi, '_') : 'Resume') + '_Resume.pdf';
                pdf.save(filename);
            });
        }
    }, 1000);
}
