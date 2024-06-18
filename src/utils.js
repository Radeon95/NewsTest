export function formatDate(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function formatArticleDate(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  const formattedDate = new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
    .format(date)
    .replace(" г.", "");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${formattedDate}, ${hours}:${minutes}`;
}

export function formatLabelDate(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
    .format(date)
    .replace(" г.", "");
}
export function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "…";
}

export function formatTime(unixTimestamp) {
  const now = new Date();
  const date = new Date(unixTimestamp * 1000);
  const diffInSeconds = Math.floor((now - date) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 7) {
    return formatDate(unixTimestamp);
  } else if (diffInDays === 1) {
    return "вчера";
  } else if (diffInDays > 1) {
    return `${diffInDays} дней назад`;
  } else if (diffInHours === 1) {
    return "час назад";
  } else if (diffInHours > 1) {
    return `${diffInHours} часов назад`;
  } else if (diffInMinutes === 1) {
    return "минуту назад";
  } else if (diffInMinutes > 1) {
    return `${diffInMinutes} минут назад`;
  } else {
    return "только что";
  }
}

export function formatDateOrToday(unixTimestamp) {
  const now = new Date();
  const date = new Date(unixTimestamp * 1000);

  if (
    now.getDate() === date.getDate() &&
    now.getMonth() === date.getMonth() &&
    now.getFullYear() === date.getFullYear()
  ) {
    return "Сегодня";
  } else {
    return formatLabelDate(unixTimestamp);
  }
}

export function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function formatSource(url) {
  const text = url.replace(/-/g, ".").replace(/\.\d+$/, "");
  const link = url.replace(/-/g, ".").replace(/\.\d+$/, "");

  const displayText =
    text.split(".")[0].charAt(0).toUpperCase() + text.split(".")[0].slice(1);
  return { displayText, link };
}
