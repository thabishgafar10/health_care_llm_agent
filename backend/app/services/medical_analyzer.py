from app.services.llm_Services import (
    ask_llm
)

def analyze_medical_report(
    text: str
):

    prompt = f"""

You are an expert healthcare AI system.

Analyze this medical report.

Return STRICT JSON ONLY.

FORMAT:

{{
  "summary": "...",

  "conditions": [
    "...",
    "..."
  ],

  "risk_level": "...",

  "findings": [
    "...",
    "..."
  ],

  "recommendations": [
    "...",
    "..."
  ],

  "entities": [
    "...",
    "..."
  ]
}}

REPORT:

{text[:4000]}

"""

    result = ask_llm(prompt)

    return result