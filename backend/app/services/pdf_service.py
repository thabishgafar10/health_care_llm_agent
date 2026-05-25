try:
    from pypdf import PdfReader
except ModuleNotFoundError:
    PdfReader = None

def extract_text_from_pdf(file_path: str):
    if PdfReader is None:
        raise RuntimeError("pypdf is not installed.")

    reader = PdfReader(file_path)

    text = ""

    for page in reader.pages:

        extracted = page.extract_text()

        if extracted:
            text += extracted

    return text
