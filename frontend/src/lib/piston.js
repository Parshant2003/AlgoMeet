const LANGUAGE_VERSIONS = {
  javascript: 63,  // JavaScript (Node.js 18.1.0)
  python: 71,      // Python 3.10.1
  java: 62,        // Java 18.0.1
};

export async function executeCode(language, code) {
  try {
    const languageId = LANGUAGE_VERSIONS[language];

    if (!languageId) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    // Step 1: Create submission
    const submissionResponse = await fetch(
      "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source_code: code,
          language_id: languageId,
          stdin: "",  // Input (optional)
        }),
      }
    );

    const submission = await submissionResponse.json();

    if (submission.message) {
      return {
        success: false,
        error: submission.message,
      };
    }

    // Step 2: Check status
    if (submission.status && submission.status.id === 3) {
      // Accepted (success)
      return {
        success: true,
        output: submission.stdout || "No output",
        stderr: submission.stderr || "",
        time: submission.time || "0",
      };
    } else {
      return {
        success: false,
        output: submission.stdout || "",
        error: submission.stderr || submission.message || "Compilation/execution error",
      };
    }
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}