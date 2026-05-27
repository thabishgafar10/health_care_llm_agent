from app.services.medical_data_store import (
    medical_reports
)

def analyze_pdf(query: str):

    if not medical_reports:

        return """

No medical reports uploaded yet.

Please upload a PDF report first.

"""

    latest_report = medical_reports[-1]

    return f"""

Medical Report Analysis

Filename:
{latest_report['filename']}

Summary:
{latest_report['summary']}

Conditions:
{', '.join(latest_report['conditions'])}

Risk Level:
{latest_report['risk_level']}

Recommendations:
{', '.join(latest_report['recommendations'])}

"""