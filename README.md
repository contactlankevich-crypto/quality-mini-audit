# Mini Audit Tool

## Deployment on Vercel

1. Создай новый репозиторий на GitHub.
2. Залей туда содержимое этой папки.
3. Подключи репозиторий к [Vercel](https://vercel.com).
4. После деплоя API будет доступен по адресу:  
   `https://your-project.vercel.app/api/audit?url=https://example.com`

## Использование на сайте (например, Tilda)

Вставь код кнопки и формы:

```html
<div style="background:#1e1e1e;color:#fff;font-family:'Manrope',sans-serif;padding:20px;border-radius:12px;max-width:400px">
  <h3>Мини-аудит сайта</h3>
  <input id="auditUrl" type="text" placeholder="Введите URL" style="width:100%;padding:10px;border-radius:8px;border:none;margin-bottom:10px">
  <button onclick="runAudit()" style="background:#f48900;color:#fff;padding:10px 20px;border:none;border-radius:8px;cursor:pointer">Проверить</button>
  <pre id="auditResult" style="margin-top:15px;white-space:pre-wrap"></pre>
</div>

<script>
async function runAudit() {
  const url = document.getElementById('auditUrl').value;
  const res = await fetch(`https://your-project.vercel.app/api/audit?url=${encodeURIComponent(url)}`);
  const data = await res.json();
  document.getElementById('auditResult').textContent = JSON.stringify(data, null, 2);
}
</script>
```

Замените `your-project` на имя проекта в Vercel.
