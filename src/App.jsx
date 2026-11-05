import React, { useState } from 'react';

export default function App() {
  const [salonName] = useState("زیباسرای طوبی");
  const [managerName] = useState("خانم رشیدی");
  const [managerPhone] = useState("09190358813");
  const [managerInstagram] = useState("Tobabeauty89");
  const [cardNumber, setCardNumber] = useState("");

  const [selectedService, setSelectedService] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [depositPaid, setDepositPaid] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(null);

  const services = [
    { id: 1, name: "خدمات تخصصی آرایش عروس - ۵,۵۰۰,۰۰۰ تومان" },
    { id: 2, name: "میکاپ - ۹۰۰,۰۰۰ تومان" },
    { id: 3, name: "شنیون - ۸۰۰,۰۰۰ تومان" },
    { id: 4, name: "کوتاهی ژورنالی - ۶۰۰,۰۰۰ تومان" },
    { id: 5, name: "کاشت ناخن - ۵۰۰,۰۰۰ تومان" },
    { id: 6, name: "رنگ و لایت - ۵,۰۰۰,۰۰۰ تومان" },
    { id: 7, name: "احیاوپروتئین - ۳,۰۰۰,۰۰۰ تومان" },
    { id: 8, name: "فشیال - ۵۰۰,۰۰۰ تومان" },
    { id: 9, name: "فردايم - ۲,۵۰۰,۰۰۰ تومان" }
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    if (!selectedService || !customerName || !customerPhone || !bookingDate || !visitDate || !depositPaid) {
      alert("لطفاً تمام فیلدها و تأیید پرداخت بیعانه را تکمیل کنید.");
      return;
    }
    const code = "TOBA-" + Math.floor(1000 + Math.random() * 9000);
    setBookingSuccess(code);
  };

  return (
    <div style={{ backgroundColor: '#1a0f1a', color: '#fbcfe8', minHeight: '100vh', padding: '16px', fontFamily: 'sans-serif', direction: 'rtl', display: 'flex', justifyContent: 'center', paddingBottom: '80px' }}>
      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#2d1529', border: '1px solid rgba(244, 114, 182, 0.4)', borderRadius: '24px', padding: '20px', boxShadow: '0 25px 50px -12px rgba(236, 72, 153, 0.25)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* اطلاعات سالن و دکمه‌های ارتباطی با بله */}
        <div style={{ textAlign: 'center', backgroundColor: '#3b1c35', border: '1px solid rgba(244, 114, 182, 0.3)', borderRadius: '16px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: '900', color: '#ffffff', margin: 0 }}>{salonName}</h1>
          <p style={{ fontSize: '11px', color: '#f472b6', margin: 0 }}>مدیریت: {managerName}</p>
          <p style={{ fontSize: '11px', color: '#cbd5e1', margin: 0, fontFamily: 'monospace' }}>تلفن مدیریت: {managerPhone}</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', paddingTop: '4px' }}>
            <a href={`https://instagram.com/${managerInstagram}`} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', backgroundColor: 'rgba(236, 72, 153, 0.2)', padding: '8px 2px', borderRadius: '8px', border: '1px solid rgba(244, 114, 182, 0.4)', fontSize: '10px', fontWeight: 'bold', display: 'block', textAlign: 'center' }}>
              📸 اینستاگرام
            </a>
            <a href={`https://ble.ir/${managerPhone}`} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', backgroundColor: 'rgba(56, 189, 248, 0.3)', padding: '8px 2px', borderRadius: '8px', border: '1px solid #38bdf8', fontSize: '10px', fontWeight: 'bold', display: 'block', textAlign: 'center' }}>
              💬 بله ({managerPhone})
            </a>
            <a href={`tel:${managerPhone}`} style={{ color: '#ffffff', textDecoration: 'none', backgroundColor: 'rgba(74, 222, 128, 0.2)', padding: '8px 2px', borderRadius: '8px', border: '1px solid rgba(74, 222, 128, 0.4)', fontSize: '10px', fontWeight: 'bold', display: 'block', textAlign: 'center' }}>
              📞 تماس مستقیم
            </a>
          </div>
        </div>

        {/* قوانین عدم کنسلی */}
        <div style={{ backgroundColor: 'rgba(159, 18, 57, 0.3)', border: '1px solid rgba(244, 114, 182, 0.3)', borderRadius: '16px', padding: '12px', textAlign: 'center', color: '#fbcfe8', fontSize: '11px' }}>
          <p style={{ fontWeight: 'bold', margin: '0 0 4px 0', color: '#f472b6' }}>⚠️ قوانین مهم رزرو (عدم کنسلی):</p>
          <p style={{ margin: 0, color: '#e2e8f0' }}>وجه واریزی به‌عنوان بیعانه قطعی‌سازی نوبت بوده و به هیچ وجه قابل استرداد نمی‌باشد.</p>
        </div>

        {/* شماره کارت پویا */}
        <div style={{ backgroundColor: '#3b1c35', border: '1px dashed rgba(244, 114, 182, 0.5)', borderRadius: '16px', padding: '14px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#f472b6', margin: '0 0 8px 0' }}>💳 شماره کارت جهت واریز بیعانه (پویا):</p>
          <input type="text" placeholder="شماره کارت را وارد کنید..." value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} style={{ width: '100%', backgroundColor: '#1a0f1a', border: '1px solid rgba(244, 114, 182, 0.4)', borderRadius: '10px', padding: '8px', textAlign: 'center', color: '#fff', fontFamily: 'monospace', fontSize: '13px', boxSizing: 'border-box' }} />
          <p style={{ fontSize: '10px', color: '#f472b6', margin: '6px 0 0 0' }}>به نام: خانم رشیدی</p>
        </div>

        {/* فرم رزرو آنلاین */}
        <form onSubmit={handleBooking} style={{ backgroundColor: '#3b1c35', border: '1px solid rgba(244, 114, 182, 0.2)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 style={{ fontSize: '12px', fontWeight: 'bold', color: '#f472b6', textAlign: 'center', margin: 0 }}>انجام کلیه خدمات زیبایی</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '11px', color: '#fbcfe8' }}>انتخاب خدمت تخصصی سالن:</label>
            <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} style={{ width: '100%', backgroundColor: '#1a0f1a', border: '1px solid rgba(244, 114, 182, 0.4)', borderRadius: '10px', padding: '10px', color: '#fbcfe8', fontSize: '12px', boxSizing: 'border-box' }}>
              <option value="">انتخاب کنید...</option>
              {services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '11px', color: '#fbcfe8' }}>نام و نام خانوادگی مشتری:</label>
            <input type="text" placeholder="مثال: سارا رضایی" value={customerName} onChange={(e) => setCustomerName(e.target.value)} style={{ width: '100%', backgroundColor: '#1a0f1a', border: '1px solid rgba(244, 114, 182, 0.4)', borderRadius: '10px', padding: '10px', color: '#fbcfe8', fontSize: '12px', boxSizing: 'border-box' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '11px', color: '#fbcfe8' }}>شماره تماس مشتری:</label>
            <input type="tel" placeholder="09123456789" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} style={{ width: '100%', backgroundColor: '#1a0f1a', border: '1px solid rgba(244, 114, 182, 0.4)', borderRadius: '10px', padding: '10px', color: '#fbcfe8', fontSize: '12px', fontFamily: 'monospace', boxSizing: 'border-box' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '11px', color: '#fbcfe8' }}>تاریخ ثبت رزرو (امروز):</label>
            <input type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} style={{ width: '100%', backgroundColor: '#1a0f1a', border: '1px solid rgba(244, 114, 182, 0.4)', borderRadius: '10px', padding: '10px', color: '#fbcfe8', fontSize: '12px', fontFamily: 'monospace', boxSizing: 'border-box' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '11px', color: '#fbcfe8' }}>تاریخ مراجعه به سالن (روز نوبت):</label>
            <input type="date" value={visitDate} onChange={(e) => setVisitDate(e.target.value)} style={{ width: '100%', backgroundColor: '#1a0f1a', border: '1px solid rgba(244, 114, 182, 0.4)', borderRadius: '10px', padding: '10px', color: '#fbcfe8', fontSize: '12px', fontFamily: 'monospace', boxSizing: 'border-box' }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', paddingTop: '4px', cursor: 'pointer' }}>
            <input type="checkbox" checked={depositPaid} onChange={(e) => setDepositPaid(e.target.checked)} style={{ width: '16px', height: '16px', accentColor: '#ec4899' }} />
            <span style={{ fontSize: '11px', color: '#fbcfe8' }}>بیعانه را واریز کردم و قوانین را می‌پذیرم</span>
          </div>

          <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#ec4899', color: '#ffffff', fontWeight: 'bold', borderRadius: '10px', border: 'none', fontSize: '12px', cursor: 'pointer' }}>
            ثبت نهایی رزرو و دریافت کد پیگیری
          </button>
        </form>

        {bookingSuccess && (
          <div style={{ backgroundColor: 'rgba(131, 24, 98, 0.6)', border: '1px solid #ec4899', borderRadius: '12px', padding: '12px', textAlign: 'center', color: '#fbcfe8', fontSize: '11px', fontWeight: 'bold' }}>
            🎉 نوبت شما ثبت شد! کد پیگیری: {bookingSuccess}<br/>
            <span style={{ fontSize: '10px', color: '#f472b6' }}>تاریخ مراجعه: {visitDate}</span>
          </div>
        )}

        {/* فوتر */}
        <div style={{ backgroundColor: '#1a0f1a', border: '1px solid rgba(244, 114, 182, 0.2)', borderRadius: '16px', padding: '12px', textAlign: 'center', fontSize: '11px', color: '#f472b6', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <p style={{ fontWeight: 'bold', color: '#fbcfe8', margin: 0 }}>توسعه‌دهنده و مدیرعامل: امیرسام یعقوبی</p>
          <p style={{ margin: 0, color: '#f472b6' }}>استارتاپ فناورانه هوش مصنوعی رویال‌فام</p>
        </div>

      </div>
    </div>
  );
}
```eof

بعد از اینکه کدی که خواستی رو توی `nano` پیست کردی و ذخیره کردی (با زدن کلیدهای Ctrl+O و Enter و سپس Ctrl+X)، برای نشستن تغییرات روی گیت‌هاب و بیلد خودکار روی ورسل، این دستور نهایی رو بزن مربی:

```bash
git add . && git commit -m "Update App.jsx with clear Bale messenger button" && git push origin main
