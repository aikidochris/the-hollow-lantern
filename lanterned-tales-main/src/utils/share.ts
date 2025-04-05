
export const sharePrompt = (prompt: string, flavor?: string, twist?: string): void => {
  const fullPrompt = `${flavor ? flavor + ' ' : ''}${prompt}${twist ? ' ' + twist : ''}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'The Hollow Lantern - Horror Writing Prompt',
      text: fullPrompt,
      url: window.location.href
    }).catch((error) => {
      console.error('Error sharing:', error);
      fallbackShare(fullPrompt);
    });
  } else {
    fallbackShare(fullPrompt);
  }
};

const fallbackShare = (text: string): void => {
  // Create a temporary textarea to copy the text
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  
  alert('Prompt copied to clipboard!');
};
