export default function loadMore(mainMessages, additionalMessages) {
  const messages = [...mainMessages];

  if (additionalMessages.length > 2) {
    for (let i = 0; i < 2; i++) {
      additionalMessages[i].main = true;

      messages.push(additionalMessages[i]);
    };

    for (let i = 2; i < additionalMessages.length; i++) {
      messages.push(additionalMessages[i]);
    };

    return messages;
  } else {
    for (let i = 0; i < additionalMessages.length; i++) {
      additionalMessages[i].main = true;

      messages.push(additionalMessages[i]);
    };

    return messages;
  };
};