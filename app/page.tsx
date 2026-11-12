'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue 
} from 'framer-motion';
import { 
  Heart, 
  Sparkles, 
  BookOpen, 
  ShieldCheck, 
  Quote, 
  ChevronDown, 
  Award, 
  Check, 
  Copy, 
  Clock, 
  Compass, 
  Music, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X, 
  Camera,
  Star,
  Flag,
  Sun,
  GraduationCap
} from 'lucide-react';

/* =========================================================================
   CẤU TRÚC DỮ LIỆU & BỘ ẢNH CHÂN THỰC CỦA CÔ LƯƠNG THỊ KIM LƯU
   ========================================================================= */

export const PHOTOS = {
  banner: '/images/banner-tri-an.jpg',
  portraitPink: '/images/co-kim-luu-portrait.jpg',
  teaching10A15: '/images/co-kim-luu-giang-day-10a15.jpg',
  classroomB105: '/images/co-kim-luu-cua-lop-b105.jpg',
  yellowDress: '/images/co-kim-luu-ao-vang-30-4.jpg',
  redDressNation: '/images/co-kim-luu-ao-do-quoc-khanh.jpg',
  outdoorSmile: '/images/co-kim-luu-doi-thuong.jpg',
};

export const AUDIO_TRACK = '/audio/bai-ca-nguoi-giao-vien-nhan-dan.mp3';

export const TRIBUTE_DATA = {
  teacher: {
    name: 'Cô Lương Thị Kim Lưu',
    role: 'Giáo viên Chủ nhiệm',
    subject: 'Giáo dục Kinh tế và Pháp luật',
    school: 'Trường THPT Xuân Đỉnh',
    classCohort: 'Tập thể Lớp 12A15 (Niên khóa K65)',
    timeline: 'Niên khóa 2024 - 2027',
  },
  song: {
    title: 'Bài ca người giáo viên nhân dân',
    composer: 'Nhạc sĩ Hoàng Vân',
  },
  hero: {
    badge: '★ TRƯỜNG THPT XUÂN ĐỈNH • NIÊN KHÓA K65 ★',
    title: 'Hành Trình Trọn Vẹn Cùng Cô Lương Thị Kim Lưu',
    subBadge: 'VINH DANH & TRI ÂN NGƯỜI LÁI ĐÒ KÍNH YÊU CỦA TẬP THỂ 12A15 NHÂN NGÀY 20/11',
    subtitle: 'Nơi tri thức pháp luật song hành cùng lòng bao dung nhẫn nại và tình thương thầm lặng của người cô kính yêu.',
  },
  stories: [
    {
      id: 'chapter-1',
      number: '01',
      title: 'Tâm Hồn Hướng Thiện & Bản Lĩnh Người Thầy',
      subtitle: 'Kiến thức vững vàng đằng sau vẻ ngoài ít bộc lộ',
      icon: BookOpen,
      image: PHOTOS.teaching10A15,
      imageCaption: 'Cô trực tiếp đứng lớp 10A15 trước bảng đen kỷ niệm "Đất Nước Trọn Niềm Vui 30/4 - 1/5"',
      imageTag: 'Chuyên Môn Vững Vàng',
      content: `Cô là người phụ nữ có tâm hồn hướng thiện thuần khiết. Có thể cô không phải là người khéo léo dùng lời hoa mỹ hay dễ dàng bộc lộ cảm xúc ra bên ngoài, nhưng trên bục giảng, cô luôn hiện diện với nền tảng kiến thức chuyên môn cực kỳ vững vàng. Từng giờ dạy Giáo dục Kinh tế và Pháp luật luôn được cô chuẩn bị chu toàn, nghiêm cẩn và đầy trách nhiệm, dạy cho chúng em không chỉ kiến thức thi cử mà là bản lĩnh làm người, sự tôn trọng pháp luật và chuẩn mực sống giữa cuộc đời.`,
      highlight: 'Sự nghiêm khắc là trách nhiệm, còn tri thức vững chãi là món quà lớn nhất cô trao gửi cho chúng em.',
    },
    {
      id: 'chapter-2',
      number: '02',
      title: 'Sự Kiên Nhẫn Trong Những Năm Đầu Tiên',
      subtitle: 'Tấm lòng bao dung trước những mảnh ghép đặc biệt',
      icon: ShieldCheck,
      image: PHOTOS.classroomB105,
      imageCaption: 'Cửa phòng học B105 - Nơi cô đón nhận và uốn nắn những học sinh đặc biệt đầu tiên',
      imageTag: 'Bao Dung & Nhẫn Nại',
      content: `Gắn bó cùng nhau từ những ngày đầu lớp 10, tập thể A15 dần thấu hiểu những áp lực thầm lặng đè nặng lên vai cô. Đặc biệt trong suốt hai năm đầu tiên nhiều thử thách, khi lớp có những thành viên mang cá tính riêng biệt cùng những hoàn cảnh cần sự sẻ chia, nâng đỡ và hỗ trợ đặc biệt để hòa nhập cùng tập thể. Đã có không ít trăn trở, vất vả, nhưng cô vẫn luôn bao dung, nhẫn nại và hết lòng vì học trò, chưa từng nản lòng hay bỏ lại bất kỳ ai phía sau.`,
      highlight: 'Sự bao dung và kiên nhẫn của cô đã nâng đỡ từng mảnh ghép, giúp A15 trở thành một tập thể gắn kết và trọn vẹn.',
    },
    {
      id: 'chapter-3',
      number: '03',
      title: 'Sự Thấu Cảm Trên Chặng Đường Cuối Cấp',
      subtitle: 'Tình thương không cần phô trương, chỉ cần lòng người cảm nhận',
      icon: Compass,
      image: PHOTOS.outdoorSmile,
      imageCaption: 'Nụ cười tươi tắn, gần gũi và ấm áp của cô ngoài đời thường',
      imageTag: 'Thấu Hiểu & Biết Ơn',
      content: `Trải qua những va vấp của tuổi học trò, giờ đây khi đã bước vào năm học lớp 12 với nhiều cột mốc quan trọng phía trước, tập thể 12A15 K65 càng thêm thấu suốt: sự nghiêm nghị của cô chính là chiếc khiên bảo vệ, và sự nhẫn nại của cô chính là điểm tựa giúp chúng em trưởng thành. Những tháng ngày bên cô không chỉ có những bài giảng Kinh tế & Pháp luật, mà còn là bài học sâu sắc về lòng vị tha, sự tử tế và tinh thần trách nhiệm trước cuộc sống.`,
      highlight: 'Chúng em đang trưởng thành từ chính sự kiên định và tấm lòng bao dung lặng lẽ ấy.',
    },
  ],
  gallery: [
    {
      id: 'gal-banner',
      src: PHOTOS.banner,
      title: 'Áp Phích Vinh Danh & Tri Ân',
      subtitle: 'THPT Xuân Đỉnh • GVCN A15K65',
      tag: 'Vinh Danh Trang Trọng',
      description: 'Bức ảnh vinh danh chính thức gửi tặng người cô kính yêu Lương Thị Kim Lưu trong tà áo dài trắng tinh khôi.',
    },
    {
      id: 'gal-portrait',
      src: PHOTOS.portraitPink,
      title: 'Nụ Cười Rạng Rỡ & Lời Chào Nồng Hậu',
      subtitle: 'Lễ bế giảng trường học • Áo dài hồng thắm',
      tag: 'Nụ Cười Tri Ân',
      description: 'Nụ cười tươi tắn và cánh tay vẫy chào học trò đầy trìu mến giữa ngày hội trường THPT Xuân Đỉnh.',
    },
    {
      id: 'gal-teaching',
      src: PHOTOS.teaching10A15,
      title: 'Cô Đứng Lớp 10A15 K65',
      subtitle: 'Bục giảng B105 • Đất Nước Trọn Niềm Vui',
      tag: 'Bục Giảng Thân Thương',
      description: 'Hình ảnh cô Lưu nhiệt huyết trên bục giảng, cầm micro truyền lửa tri thức pháp luật cho lớp 10A15.',
    },
    {
      id: 'gal-b105',
      src: PHOTOS.classroomB105,
      title: 'Trước Cửa Phòng Học B105',
      subtitle: 'Lớp 10A15 • Kỷ niệm ngày đầu',
      tag: 'Mái Trường Xưa',
      description: 'Cô đứng bên giàn hoa giấy và cờ đỏ sao vàng tại cửa phòng học B105 — nơi khởi đầu hành trình thanh xuân cô trò.',
    },
    {
      id: 'gal-yellow',
      src: PHOTOS.yellowDress,
      title: 'Việt Nam Trong Tôi — Tự Hào 30/4',
      subtitle: 'Áo dài vàng hoa cúc rạng rỡ',
      tag: 'Tự Hào Non Sông',
      description: 'Vẻ đẹp dịu dàng, quý phái của cô giáo bộ môn Kinh tế & Pháp luật trong ngày hội thống nhất đất nước.',
    },
    {
      id: 'gal-red',
      src: PHOTOS.redDressNation,
      title: 'Việt Nam Mãi Mãi Tổ Quốc Của Tôi',
      subtitle: 'Quảng trường Ba Đình • Áo dài đỏ sao vàng',
      tag: 'Ngày Lễ Độc Lập',
      description: 'Cô Lưu rực rỡ và trang nghiêm trước Lăng Chủ tịch Hồ Chí Minh trong ngày Tết Độc Lập 2/9.',
    },
    {
      id: 'gal-outdoor',
      src: PHOTOS.outdoorSmile,
      title: 'Khoảnh Khắc Đời Thường Trẻ Trung',
      subtitle: 'Dã ngoại hòa mình cùng thiên nhiên xanh',
      tag: 'Gần Gũi Đời Thường',
      description: 'Nụ cười tươi tắn, phong thái trẻ trung, gần gũi và tràn đầy sức sống của cô ngoài bục giảng.',
    },
  ],
  closing: {
    quoteLead: 'Bọn em cảm ơn cô vì tất cả. Kính chúc cô...',
    defaultWish:
      'luôn dồi dào sức khỏe, luôn giữ trọn ngọn lửa nhiệt huyết với nghề và luôn hạnh phúc, an yên trên con đường phía trước...',
    signOff: 'Tập thể Lớp 12A15 (Niên khóa K65)',
    schoolName: 'Trường THPT Xuân Đỉnh',
  },
};

// Dải cờ đuôi nheo thập niên cũ: Đỏ, Vàng, Xanh lá, Xanh dương, Cam
const BUNTING_FLAGS = [
  '#dc2626', '#eab308', '#059669', '#2563eb', '#ea580c', 
  '#dc2626', '#eab308', '#059669', '#2563eb', '#ea580c',
  '#dc2626', '#eab308', '#059669', '#2563eb', '#ea580c',
  '#dc2626', '#eab308', '#059669', '#2563eb', '#ea580c',
  '#dc2626', '#eab308', '#059669', '#2563eb', '#ea580c',
];

/* =========================================================================
   CÁC THÀNH PHẦN HIỆU ỨNG CHUYỂN ĐỘNG HIỆN ĐẠI (MODERN MOTION COMPONENTS)
   ========================================================================= */

// 1. BỤI PHẤN VÀNG & CÁNH HOA PHƯỢNG RƠI LÃNG MẠN (AMBIENT FLOATING PARTICLES)
function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; size: number; duration: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const colors = [
      'rgba(234, 179, 8, 0.55)',  // Vàng hoàng kim
      'rgba(220, 38, 38, 0.45)',  // Đỏ cờ hoa
      'rgba(245, 158, 11, 0.5)',  // Cam nắng sân trường
      'rgba(255, 255, 255, 0.6)', // Bụi phấn trắng
      'rgba(16, 185, 129, 0.4)'   // Xanh non kỷ niệm
    ];
    const items = Array.from({ length: 32 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 14 + 10,
      delay: Math.random() * 5,
      color: colors[i % colors.length]
    }));
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full blur-[0.6px]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          animate={{
            y: [0, -200, -400],
            x: [0, Math.sin(p.id) * 35, 0],
            opacity: [0, 0.85, 0],
            scale: [0.7, 1.25, 0.6]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// 2. KHUNG 3D NGHIÊNG THEO CHUỘT / TƯƠNG TÁC (3D TILT WITH SPECULAR SHEEN)
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-transform duration-300 ${className}`}
    >
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

// 3. TIÊU ĐỀ CHỮ XUẤT HIỆN TỪNG TỪ MANG TÍNH ĐIỆN ẢNH (KINETIC TYPOGRAPHY)
function KineticWords({ text, className = "", delayOffset = 0 }: { text: string; className?: string; delayOffset?: number }) {
  const words = text.split(" ");
  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-top">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0, rotateZ: 3, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, rotateZ: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.7,
              delay: delayOffset + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// 4. BĂNG RÔN KHẨU HIỆU CHẠY VÔ TẬN (SEAMLESS INFINITE MARQUEE)
function InfiniteMarquee({ text, speed = 25 }: { text: string; speed?: number }) {
  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap border-y-4 border-yellow-400 bg-gradient-to-r from-red-900 via-red-700 to-red-900 text-yellow-300 py-3.5 shadow-xl select-none group">
      <motion.div
        className="inline-flex space-x-10 font-serif font-black text-xs sm:text-sm md:text-base tracking-widest uppercase cursor-default"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
}

// 5. THANH TIẾN TRÌNH CUỘN TRANG TRANG NHÃ (READING PROGRESS BEAM)
function ScrollProgressBeam() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-6 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-amber-400 to-red-600 z-50 origin-left shadow-[0_0_12px_rgba(234,179,8,0.9)]"
      style={{ scaleX }}
    />
  );
}

export default function TributeLandingPage() {
  const [customWish, setCustomWish] = useState(TRIBUTE_DATA.closing.defaultWish);
  const [isCopied, setIsCopied] = useState(false);
  const [isEditingWish, setIsEditingWish] = useState(false);

  // Audio Ref & State
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showWelcomeGate, setShowWelcomeGate] = useState(false);

  // Spotlight ảnh cô ở Hero
  const [activeHeroPhoto, setActiveHeroPhoto] = useState<string>(PHOTOS.banner);

  // Modal phóng to ảnh 100% không cắt xén
  const [modalImage, setModalImage] = useState<{ src: string; title: string; subtitle: string; description?: string } | null>(null);

  /* =========================================================================
     CƠ CHẾ TỰ ĐỘNG PHÁT NHẠC (AUTOPLAY TRÌNH DUYỆT + WELCOME GATE + TƯƠNG TÁC)
     ========================================================================= */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.85;

    // 1. Thử gọi play() tự động ngay lập tức khi mở trang
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setShowWelcomeGate(false);
        })
        .catch(() => {
          // 2. Trình duyệt chặn autoplay thuần (Safari iOS, Chrome, Android do chính sách âm thanh)
          // Hiện bảng thông báo mở thiệp chào mừng để kích hoạt âm thanh một cách tự nhiên 100%
          setShowWelcomeGate(true);
          setIsPlaying(false);

          // 3. Fallback: Bất kỳ lần chạm/nhấn nào trên màn hình cũng tự động phát
          const handleFirstInteraction = () => {
            if (audioRef.current && audioRef.current.paused) {
              audioRef.current.play()
                .then(() => {
                  setIsPlaying(true);
                  setShowWelcomeGate(false);
                  removeListeners();
                })
                .catch(() => {
                  // Tiếp tục giữ listener cho lần chạm sau
                });
            }
          };

          const removeListeners = () => {
            window.removeEventListener('click', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
            window.removeEventListener('pointerdown', handleFirstInteraction);
            window.removeEventListener('keydown', handleFirstInteraction);
          };

          window.addEventListener('click', handleFirstInteraction, { passive: true });
          window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
          window.addEventListener('pointerdown', handleFirstInteraction, { passive: true });
          window.addEventListener('keydown', handleFirstInteraction, { passive: true });
        });
    }
  }, []);

  const handleEnterWithMusic = () => {
    setShowWelcomeGate(false);
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((e) => {
          console.log('Play prevented:', e);
        });
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log('Manual play prevented:', e));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleCopy = () => {
    const fullText = `${TRIBUTE_DATA.closing.quoteLead}\n\n${customWish}\n\n— ${TRIBUTE_DATA.closing.signOff}, ${TRIBUTE_DATA.closing.schoolName}`;
    navigator.clipboard.writeText(fullText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const scrollToStory = () => {
    document.getElementById('scrollytelling')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Trục thời gian tiến trình cuộn trang
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 75%"]
  });
  const timelineScaleY = useSpring(timelineProgress, { stiffness: 90, damping: 25, restDelta: 0.001 });

  return (
    <main className="min-h-screen bg-[#fffdf8] text-[#1c1917] selection:bg-red-600 selection:text-yellow-200 overflow-x-clip relative">
      
      {/* 1. HẠT BỤI PHẤN VÀ CÁNH HOA PHƯỢNG CHUYỂN ĐỘNG TRÔI BỒNG BỀNH */}
      <FloatingParticles />

      {/* 2. TIA SÁNG TIẾN TRÌNH CUỘN TRANG */}
      <ScrollProgressBeam />

      {/* Audio element ẩn */}
      <audio
        ref={audioRef}
        src={AUDIO_TRACK}
        loop
        autoPlay
        playsInline
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* DẢI CỜ TAM GIÁC ĐUÔI NHEO SẮC MÀU THẬP NIÊN CŨ (RESPONSIVE SVG) */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full overflow-hidden pointer-events-none drop-shadow-sm h-6 flex">
        {BUNTING_FLAGS.map((color, i) => (
          <motion.div
            key={i}
            className="flex-1 h-full"
            style={{ 
              backgroundColor: color,
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            }}
            animate={{
              y: [0, 2.5, 0],
              rotate: [0, (i % 2 === 0 ? 3 : -3), 0]
            }}
            transition={{
              duration: 2 + (i % 4) * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 5) * 0.12
            }}
          />
        ))}
      </div>

      {/* THANH ĐIỀU HƯỚNG MANG PHONG CÁCH BĂNG RÔN ĐỎ SAO VÀNG CỔ ĐIỂN */}
      <nav className="fixed top-4 sm:top-5 left-0 right-0 z-40 px-2 sm:px-6">
        <motion.div 
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-6xl mx-auto backdrop-blur-md bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-yellow-300 border-2 border-yellow-400 rounded-xl sm:rounded-2xl shadow-xl px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between"
        >
          
          <div className="flex items-center space-x-1.5 sm:space-x-2 min-w-0">
            <motion.div 
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-yellow-400 text-red-900 font-black text-[11px] sm:text-xs flex items-center justify-center border border-red-900 shadow flex-shrink-0"
            >
              ★
            </motion.div>
            <div className="leading-tight min-w-0">
              <span className="text-[11px] sm:text-sm font-bold uppercase tracking-wider text-yellow-300 drop-shadow block truncate max-w-[140px] sm:max-w-none">
                THPT Xuân Đỉnh • A15
              </span>
              <span className="hidden md:inline-block text-[11px] text-white/90 ml-2 font-normal">
                (2024 - 2027)
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className={`flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all border cursor-pointer ${
                isPlaying 
                  ? 'bg-yellow-400 text-red-900 border-yellow-300 shadow-md animate-pulse'
                  : 'bg-red-900/90 text-yellow-200 border-yellow-400/60 hover:bg-yellow-400 hover:text-red-900'
              }`}
            >
              <Music className="w-3 sm:w-3.5 h-3 sm:h-3.5 flex-shrink-0" />
              <span>{isPlaying ? 'Nhạc: Bật 🎵' : 'Mở nhạc'}</span>
            </motion.button>
          </div>

        </motion.div>
      </nav>

      {/* HERO SECTION: TÔNG SÁNG, XANH ĐỎ VÀNG SẶC SỠ THẬP NIÊN CŨ KẾT HỢP CHUYỂN ĐỘNG HIỆN ĐẠI */}
      <section className="relative pt-24 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#fef5e7] via-[#fffaf0] to-[#fffdf8] w-full max-w-full">
        
        {/* Nền hoa văn giấy khen cổ điển và tia sáng được bọc kỹ trong container overflow-hidden */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
          <motion.div 
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.35, 0.55, 0.35]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-tr from-yellow-300/40 via-red-300/30 to-emerald-300/30 rounded-full blur-[140px]" 
          />
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          
          {/* Băng Rôn Khẩu Hiệu Đỏ Chữ Vàng Cổ Điển — Rơi tem ấn đóng dấu */}
          <div className="text-center mb-6 sm:mb-8 px-2">
            <motion.div
              initial={{ scale: 0, rotate: -10, y: -30 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.15 }}
              className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-6 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-yellow-300 border-2 border-yellow-400 shadow-xl text-[10px] sm:text-xs md:text-sm font-bold tracking-wider uppercase max-w-full"
            >
              <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-yellow-300 text-yellow-300 flex-shrink-0 animate-spin [animation-duration:12s]" />
              <span className="truncate">{TRIBUTE_DATA.hero.badge}</span>
              <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-yellow-300 text-yellow-300 flex-shrink-0 animate-spin [animation-duration:12s]" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[repeat(12,minmax(0,1fr))] gap-8 lg:gap-14 items-center w-full">
            
            {/* CỘT NỘI DUNG HERO (7 Cột) */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start w-full min-w-0">
              
              {/* Tiêu đề chính rực rỡ phong cách thập niên cũ với Kinetic Reveal */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight text-red-800 leading-[1.25] mb-4 drop-shadow-sm max-w-full">
                <KineticWords text="Hành Trình Trọn Vẹn" delayOffset={0.2} />
                <br />
                <span className="text-emerald-800">
                  <KineticWords text="Cùng Cô Lương Thị Kim Lưu" delayOffset={0.6} />
                </span>
              </h1>

              {/* Băng chữ phong cách giấy khen */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="inline-block px-3 py-1.5 rounded-lg bg-emerald-800 text-yellow-300 font-bold text-[10px] sm:text-xs md:text-sm tracking-wide uppercase border border-yellow-400 mb-4 shadow text-center max-w-full"
              >
                {TRIBUTE_DATA.hero.subBadge}
              </motion.div>

              {/* Dải phân cách hoa sen / cờ đỏ */}
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex items-center space-x-3 w-48 sm:w-56 my-2"
              >
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-yellow-500" />
                <div className="w-6 h-6 rounded-full bg-red-600 text-yellow-300 flex items-center justify-center text-xs font-bold border border-yellow-400 shadow">
                  ★
                </div>
                <div className="h-[2px] w-full bg-gradient-to-l from-transparent via-red-600 to-yellow-500" />
              </motion.div>

              {/* Thông điệp tình cảm */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.1 }}
                className="text-sm sm:text-base md:text-lg text-stone-700 font-normal leading-relaxed mt-3 max-w-xl"
              >
                Kính gửi người cô kính yêu giảng dạy môn{' '}
                <strong className="text-red-700 font-bold bg-yellow-200/90 px-1 py-0.5 rounded">
                  {TRIBUTE_DATA.teacher.subject}
                </strong>{' '}
                — Người đã nhẫn nại, tận tâm chở đạo và dùng cả tấm lòng bao dung đồng hành cùng A15 K65 từ những ngày đầu bỡ ngỡ đến chặng đường cuối cấp đầy thử thách hôm nay.
              </motion.p>

              {/* Cụm Nút Hành Động Rực Rỡ với Hiệu ứng Spring & Pulse */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.25 }}
                className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(220, 38, 38, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  className="inline-flex items-center space-x-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-yellow-300 font-bold text-xs sm:text-sm tracking-wide shadow-xl border-2 border-yellow-400 transition-colors cursor-pointer"
                >
                  <Music className="w-4 h-4 fill-yellow-300" />
                  <span>{isPlaying ? 'Tạm Dừng Nhạc Nền' : 'Phát Nhạc: Bài Ca Người GVND 🎵'}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={scrollToStory}
                  className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm border-2 border-emerald-900 shadow-md transition-colors cursor-pointer"
                >
                  <span>Lật Mở Từng Trang Ký Ức</span>
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                </motion.button>
              </motion.div>
            </div>

            {/* CỘT KHUNG ẢNH CÔ — Áp dụng Hiệu ứng Nghiêng 3D (TiltCard) & Sóng Âm Aura */}
            <div className="lg:col-span-5 flex flex-col items-center w-full max-w-full">
              
              <TiltCard className="w-full max-w-[330px] sm:max-w-sm">
                <div className="relative group w-full">
                  
                  {/* Sóng âm thanh hào quang chuyển động khi phát nhạc */}
                  {isPlaying && (
                    <>
                      <motion.div
                        className="absolute -inset-3 rounded-3xl border-2 border-yellow-400 pointer-events-none"
                        animate={{ scale: [1, 1.07, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute -inset-6 rounded-3xl border border-red-500 pointer-events-none"
                        animate={{ scale: [1, 1.13, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                      />
                    </>
                  )}

                  {/* Viền ngoài rực rỡ đỏ - vàng */}
                  <div className="p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-red-700 via-yellow-500 to-emerald-700 shadow-2xl border-3 sm:border-4 border-yellow-300">
                    
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-white border-2 border-red-800 shadow-inner">
                      
                      {/* Góc hoa văn bằng khen cổ điển */}
                      <div className="absolute top-2 left-2 z-20 px-2.5 sm:px-3 py-1 rounded-full bg-red-700 text-yellow-300 text-[10px] sm:text-[11px] font-bold border border-yellow-300 flex items-center space-x-1 shadow">
                        <Star className="w-3 h-3 fill-yellow-300" />
                        <span>Khoảnh Khắc Chủ Đạo</span>
                      </div>

                      <button
                        onClick={() => setModalImage({
                          src: activeHeroPhoto,
                          title: 'Khoảnh Khắc Tri Ân Cô Lương Thị Kim Lưu',
                          subtitle: 'Trường THPT Xuân Đỉnh • Giáo viên Chủ nhiệm A15K65'
                        })}
                        className="absolute top-2 right-2 z-20 p-2 rounded-full bg-black/60 text-yellow-300 hover:bg-red-700 border border-yellow-300 transition-colors cursor-pointer"
                        title="Phóng to ảnh"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>

                      {/* Ảnh chính hiển thị 100% tỷ lệ gốc có Crossfade Animation */}
                      <div 
                        className="relative aspect-square w-full bg-[#fdfaf3] flex items-center justify-center p-2 cursor-pointer overflow-hidden"
                        onClick={() => setModalImage({
                          src: activeHeroPhoto,
                          title: 'Khoảnh Khắc Tri Ân Cô Lương Thị Kim Lưu',
                          subtitle: 'Trường THPT Xuân Đỉnh • Giáo viên Chủ nhiệm A15K65'
                        })}
                      >
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={activeHeroPhoto}
                            src={activeHeroPhoto}
                            alt="Cô Lương Thị Kim Lưu"
                            initial={{ opacity: 0, scale: 0.94, filter: "blur(4px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full object-contain"
                          />
                        </AnimatePresence>
                      </div>

                      {/* Dải chân khung đỏ viền vàng */}
                      <div className="p-2.5 sm:p-3 bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-yellow-200 text-center border-t-2 border-yellow-400">
                        <p className="text-xs sm:text-sm font-bold font-serif tracking-wide">
                          Cô Lương Thị Kim Lưu — Giáo viên Kinh tế và Pháp luật
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-yellow-100 font-light mt-0.5">
                          Bấm vào ảnh để xem độ phân giải cao nhất
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </TiltCard>

              {/* Dải thumbnail 7 ảnh cô có hiệu ứng tương tác nảy */}
              <div className="mt-4 flex items-center space-x-2 overflow-x-auto p-2 rounded-xl bg-white border-2 border-yellow-500/50 shadow-md max-w-sm sm:max-w-md">
                {[
                  { src: PHOTOS.banner, label: 'Banner Tri Ân' },
                  { src: PHOTOS.portraitPink, label: 'Áo Dài Hồng' },
                  { src: PHOTOS.teaching10A15, label: 'Bục Giảng 10A15' },
                  { src: PHOTOS.classroomB105, label: 'Cửa Lớp B105' },
                  { src: PHOTOS.yellowDress, label: 'Áo Vàng 30/4' },
                  { src: PHOTOS.redDressNation, label: 'Áo Đỏ 2/9' },
                  { src: PHOTOS.outdoorSmile, label: 'Đời Thường' },
                ].map((item, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveHeroPhoto(item.src)}
                    className={`relative w-10 sm:w-11 h-10 sm:h-11 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all cursor-pointer ${
                      activeHeroPhoto === item.src 
                        ? 'border-red-600 scale-110 shadow-lg ring-2 ring-yellow-400' 
                        : 'border-stone-300 opacity-60 hover:opacity-100'
                    }`}
                    title={item.label}
                  >
                    <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>
              <span className="text-[11px] text-red-800 font-medium mt-1.5 animate-pulse">
                👆 Bấm vào từng ảnh nhỏ để đổi ảnh hiển thị của cô
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* BĂNG RÔN KHẨU HIỆU CHẠY VÔ TẬN PHONG CÁCH LỄ HỘI TRƯỜNG HỌC THẬP NIÊN CŨ */}
      <InfiniteMarquee 
        text="★ HỌC ĐỂ BIẾT, HỌC ĐỂ LÀM VIỆC, HỌC ĐỂ CHUNG SỐNG, HỌC ĐỂ HOÀN THIỆN NHÂN CÁCH ★ KHẨU HIỆU TRƯỜNG THPT XUÂN ĐỈNH ★ TRI ÂN CÔ LƯƠNG THỊ KIM LƯU — A15K65 (2024 - 2027) ★ DẤU ẤN THANH XUÂN CÔ TRÒ ★" 
        speed={32}
      />

      {/* PHASE 3: CÂU CHUYỆN THẤU HIỂU (SCROLLYTELLING CÓ ẢNH THẬP NIÊN CŨ) */}
      <section id="scrollytelling" className="py-20 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full overflow-hidden">
        
        {/* Tiêu đề phần */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-800 text-yellow-300 text-xs font-bold uppercase tracking-widest mb-3 border border-yellow-400 shadow">
            <Clock className="w-3.5 h-3.5" />
            <span>Hành Trình Đồng Hành & Thấu Cảm</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-red-800 tracking-tight">
            Những Điều Tập Thể 12A15 Khắc Ghi
          </h2>
          <p className="mt-3 text-stone-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            Mỗi chặng đường đều in đậm dấu ấn tận tụy của cô Lưu — từ bục giảng B105 đến từng bước đường đời.
          </p>
        </div>

        {/* Trục thời gian (Timeline) — Vẽ đường dẫn theo thước cuộn (Scroll-linked) */}
        <div ref={timelineRef} className="relative w-full">
          
          {/* Đường ray nền nhạt */}
          <div className="absolute left-3.5 sm:left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[3px] bg-amber-200/50 pointer-events-none rounded-full overflow-hidden">
            {/* Vệt ánh sáng đỏ - vàng chạy dọc theo bước cuộn */}
            <motion.div 
              className="w-full bg-gradient-to-b from-red-600 via-yellow-400 to-emerald-600 origin-top shadow-[0_0_12px_rgba(234,179,8,0.9)]"
              style={{ height: '100%', scaleY: timelineScaleY }}
            />
          </div>

          {/* 3 Thẻ Câu Chuyện */}
          <div className="space-y-16 md:space-y-28 w-full">
            {TRIBUTE_DATA.stories.map((story, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = story.icon;

              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, x: isEven ? 80 : -80, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex flex-col md:flex-row items-center w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Điểm nút trên trục: Ngôi sao đỏ vàng xoay nở khi cuộn tới */}
                  <motion.div 
                    initial={{ scale: 0.6, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="absolute left-3.5 sm:left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-red-700 text-yellow-300 border-2 sm:border-3 border-yellow-400 shadow-xl"
                  >
                    <IconComponent className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </motion.div>

                  <div className="hidden md:block md:w-1/2" />

                  {/* Khối Thẻ phong cách Bằng Khen kết hợp 3D Tilt */}
                  <div
                    className={`w-full md:w-1/2 pl-7 sm:pl-10 md:pl-0 box-border ${
                      isEven ? 'md:pr-10' : 'md:pl-10'
                    }`}
                  >
                    <TiltCard className="w-full">
                      <div className="p-5 sm:p-8 rounded-2xl bg-white border-2 border-red-700 shadow-xl relative overflow-hidden group hover:border-yellow-500 transition-colors">
                        
                        {/* Huy hiệu số thứ tự */}
                        <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-red-700 text-yellow-300 font-serif font-black text-base sm:text-xl flex items-center justify-center rounded-bl-3xl border-b-2 border-l-2 border-yellow-400 shadow">
                          {story.number}
                        </div>

                        <span className="inline-block text-[11px] sm:text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1.5 sm:mb-2">
                          {story.subtitle}
                        </span>
                        <h3 className="text-lg sm:text-2xl font-serif text-red-800 font-black mb-3 pr-12 leading-snug">
                          {story.title}
                        </h3>

                        {/* Bức ảnh thực tế của cô trong khung sáng ấm áp */}
                        <div className="my-3 sm:my-4 rounded-xl overflow-hidden border-2 border-amber-300 bg-[#fdf9f0] group-hover:border-red-600 transition-colors shadow">
                          <div 
                            className="relative aspect-video sm:aspect-[16/10] overflow-hidden cursor-pointer bg-[#f7eedc] flex items-center justify-center p-1"
                            onClick={() => setModalImage({
                              src: story.image,
                              title: story.title,
                              subtitle: story.imageCaption
                            })}
                          >
                            <img
                              src={story.image}
                              alt={story.imageCaption}
                              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-red-700 text-yellow-300 text-[10px] font-bold border border-yellow-300 shadow">
                              {story.imageTag}
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setModalImage({
                                  src: story.image,
                                  title: story.title,
                                  subtitle: story.imageCaption
                                });
                              }}
                              className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white hover:bg-red-600 transition-colors"
                            >
                              <Maximize2 className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="p-2 sm:p-2.5 bg-yellow-50 border-t border-amber-200 text-center">
                            <p className="text-xs text-stone-700 font-medium italic">
                              📸 {story.imageCaption}
                            </p>
                          </div>
                        </div>

                        <p className="text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5">
                          {story.content}
                        </p>

                        {/* Trích dẫn nổi bật nền vàng chữ đỏ */}
                        <div className="border-l-4 border-red-600 pl-3.5 py-1.5 sm:py-2 bg-yellow-100/90 rounded-r-lg">
                          <p className="text-xs sm:text-sm text-red-900 font-serif italic font-semibold leading-relaxed">
                            "{story.highlight}"
                          </p>
                        </div>

                      </div>
                    </TiltCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
         BẢNG ĐEN TRƯỜNG HỌC THẬP NIÊN CŨ (VINTAGE CHALKBOARD SECTION)
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0b3d2c] via-[#064e3b] to-[#043327] text-white border-y-4 border-yellow-400 shadow-2xl">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block px-3.5 py-1 rounded-full bg-yellow-400 text-emerald-950 font-bold text-xs uppercase tracking-wider mb-2">
              Bục Giảng Thân Thương 10A15 - 12A15
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-yellow-300">
              Bài Giảng Kinh Tế & Pháp Luật Của Cô
            </h2>
            <p className="mt-2 text-emerald-100 text-xs sm:text-sm max-w-xl mx-auto">
              Không chỉ là điểm số thi cử, đó là những bài học làm người ngay thẳng, tôn trọng kỷ cương và sống có trách nhiệm với quê hương, đất nước.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[repeat(3,minmax(0,1fr))] gap-5 sm:gap-6 w-full">
            {[
              {
                num: 1,
                title: 'Kiến Thức Vững Vàng',
                desc: 'Từng trang giáo án môn GD Kinh tế & Pháp luật luôn được cô chuẩn bị chỉn chu, truyền đạt khúc chiết và mạch lạc.'
              },
              {
                num: 2,
                title: 'Bao Dung & Nhẫn Nại',
                desc: 'Đối diện với những thử thách và các mảnh ghép đặc biệt trong hai năm đầu, cô chọn ở lại, kiên nhẫn lắng nghe và uốn nắn từng ngày.'
              },
              {
                num: 3,
                title: 'Tình Thương Lặng Lẽ',
                desc: 'Dù kiệm lời ngọt ngào, nhưng mỗi hành động của cô đều bảo bọc và hướng tập thể 12A15 K65 vững bước trên chặng đường cuối cấp.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-5 sm:p-6 rounded-2xl bg-emerald-900/70 border-2 border-emerald-400/50 backdrop-blur-sm text-center min-w-0 shadow-xl group hover:border-yellow-400 transition-colors"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-yellow-400 text-emerald-900 font-black text-lg sm:text-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md group-hover:rotate-12 transition-transform">
                  {item.num}
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-yellow-300 mb-1.5 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
         BỘ SƯU TẬP 7 KHOẢNH KHẮC CỦA CÔ (ALBUM NIÊN KHÓA VINTAGE KẾT HỢP 3D HOVER)
         ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-700 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-3 border border-yellow-400 shadow"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Kỷ Yếu A15K65 • THPT Xuân Đỉnh</span>
          </motion.div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-red-800">
            Bộ Sưu Tập Hình Ảnh Cô Lương Thị Kim Lưu
          </h2>
          <p className="mt-3 text-stone-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            Toàn bộ 7 bức ảnh lưu giữ những khoảnh khắc đẹp nhất: từ bục giảng thân thương đến nụ cười rạng ngời của người cô kính yêu.
          </p>
        </div>

        {/* Lưới 7 Ảnh Vintage với Hiệu ứng Trồi Lên Từng Thẻ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))] gap-6 sm:gap-8 w-full">
          {TRIBUTE_DATA.gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="rounded-2xl overflow-hidden bg-white border-2 border-red-700 shadow-xl hover:border-yellow-500 transition-all flex flex-col justify-between group min-w-0"
            >
              <div className="relative">
                {/* Tag màu sắc */}
                <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-red-700 text-yellow-300 text-[10px] sm:text-[11px] font-bold border border-yellow-300 shadow">
                  {item.tag}
                </div>

                <button
                  onClick={() => setModalImage({ 
                    src: item.src, 
                    title: item.title, 
                    subtitle: item.subtitle,
                    description: item.description 
                  })}
                  className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-yellow-300 hover:bg-red-700 border border-yellow-300 transition-colors cursor-pointer"
                  title="Phóng to ảnh"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                {/* Khung ảnh hiển thị trọn vẹn 100% tỷ lệ gốc */}
                <div 
                  className="relative aspect-[4/5] bg-[#f8f4eb] flex items-center justify-center p-2 cursor-pointer overflow-hidden"
                  onClick={() => setModalImage({ 
                    src: item.src, 
                    title: item.title, 
                    subtitle: item.subtitle,
                    description: item.description 
                  })}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Chú thích chân ảnh */}
              <div className="p-4 sm:p-5 bg-gradient-to-b from-yellow-50/50 to-yellow-100/50 border-t-2 border-yellow-400">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-sm sm:text-base font-serif font-black text-red-800 mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PHASE 4: STICKY REVEAL (LỜI TRI ÂN & CHÂN DUNG ÁO DÀI HỒNG VẪY TAY CÓ LEVITATION) */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t-4 border-yellow-400 bg-gradient-to-b from-white via-[#fefaf0] to-white overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-[140px]" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[repeat(12,minmax(0,1fr))] gap-10 lg:gap-12 items-start w-full">
          
          {/* CỘT TRÁI: GHIM CỐ ĐỊNH (STICKY) BỨC ẢNH CÔ VẪY TAY VỚI HIỆU ỨNG BAY LƠ LỬNG NHẸ NHÀNG */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 min-w-0 w-full">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <TiltCard className="max-w-[330px] sm:max-w-sm mx-auto">
                <div className="p-2.5 sm:p-3.5 rounded-3xl bg-gradient-to-br from-red-700 via-yellow-500 to-red-800 shadow-2xl border-4 border-yellow-300">
                  
                  <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-red-800 shadow-inner">
                    
                    <button
                      onClick={() => setModalImage({
                        src: PHOTOS.portraitPink,
                        title: 'Cô Lương Thị Kim Lưu — Nụ Cười Của Người Lái Đò A15K65',
                        subtitle: 'Bức ảnh chân thực giữ trọn vẹn 95.2% hình ảnh gốc'
                      })}
                      className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-yellow-300 hover:bg-red-700 border border-yellow-300 transition-colors cursor-pointer"
                      title="Phóng to ảnh"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Khung ảnh dọc */}
                    <div 
                      className="relative w-full bg-[#f8f5ee] flex items-center justify-center overflow-hidden max-h-[620px] cursor-pointer"
                      onClick={() => setModalImage({
                        src: PHOTOS.portraitPink,
                        title: 'Cô Lương Thị Kim Lưu — Nụ Cười Của Người Lái Đò A15K65',
                        subtitle: 'Bức ảnh chân thực giữ trọn vẹn 95.2% hình ảnh gốc'
                      })}
                    >
                      <img
                        src={PHOTOS.portraitPink}
                        alt={TRIBUTE_DATA.teacher.name}
                        className="w-full h-auto max-h-[620px] object-contain hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Băng chữ dưới chân ảnh */}
                      <div className="absolute bottom-3 left-3 right-3 bg-red-800/90 text-yellow-200 text-center py-2 px-3 rounded-xl border border-yellow-300 shadow">
                        <span className="text-[10px] uppercase tracking-widest text-yellow-300 font-bold block">
                          Kính Yêu & Biết Ơn
                        </span>
                        <h4 className="text-sm sm:text-base font-serif font-black text-white">
                          {TRIBUTE_DATA.teacher.name}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-yellow-100 mt-0.5">
                          Nụ cười rạng rỡ của người lái đò A15K65
                        </p>
                      </div>
                    </div>

                    <div className="p-2.5 sm:p-3 bg-red-800 text-yellow-200 text-center border-t-2 border-yellow-400">
                      <span className="text-xs font-serif font-bold italic">
                        "Tận tâm chở đạo, chở người qua sông..."
                      </span>
                    </div>

                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>

          {/* CỘT PHẢI: BỨC THƯ TRI ÂN VỚI HIỆU ỨNG CUỘN TRƯỢT TỪNG TRANG */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 min-w-0 w-full">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-red-700 mb-2">
                <Quote className="w-3.5 h-3.5" />
                <span>Bức Thư Tri Ân Cuối Cấp</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-red-800 leading-tight">
                Lời Tri Ân Từ Trái Tim Tập Thể 12A15
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="prose max-w-none text-stone-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-3.5 sm:space-y-4"
            >
              <p>
                Kính gửi <strong className="text-red-800 font-bold">Cô Lương Thị Kim Lưu</strong>,
              </p>
              <p>
                Nhân dịp ngày Nhà giáo Việt Nam 20/11 trong năm học lớp 12 đầy ý nghĩa này, tập thể 12A15 K65 muốn gửi tới cô lời cảm ơn chân thành và sâu sắc nhất từ tận đáy lòng.
              </p>
              <p>
                Chúng em biết rằng bản thân chưa bao giờ là một tập thể hoàn hảo, và hành trình đồng hành cùng chúng em đã có lúc khiến cô phải phiền lòng. Nhưng chính nhờ sự kiên nhẫn, lòng bao dung vô bờ bến và bản lĩnh vững vàng của cô qua từng năm tháng mà chúng em mới có được sự chững chạc và trưởng thành của ngày hôm nay.
              </p>
              <p>
                Bọn em cảm ơn cô vì tất cả những bài học, sự chở che và tình thương thầm lặng mà cô đã dành cho A15 K65 suốt chặng đường vừa qua.
              </p>
            </motion.div>

            {/* Khối Điểm Nhấn: Lời cảm ơn và Lời chúc có thể chỉnh sửa */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-yellow-50 via-white to-yellow-100 border-2 border-red-700 shadow-xl relative"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <span className="text-xs uppercase tracking-widest text-red-700 font-bold flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-red-600 fill-red-600" />
                  Thông điệp tri ân
                </span>
                <button
                  onClick={() => setIsEditingWish(!isEditingWish)}
                  className="text-xs font-bold text-red-700 hover:text-red-900 underline underline-offset-4 cursor-pointer"
                >
                  {isEditingWish ? 'Xong' : 'Chỉnh sửa lời chúc'}
                </button>
              </div>

              <h3 className="text-lg sm:text-2xl font-serif text-red-800 font-black mb-3 leading-snug">
                "{TRIBUTE_DATA.closing.quoteLead}"
              </h3>

              <AnimatePresence mode="wait">
                {isEditingWish ? (
                  <motion.div
                    key="editing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    <textarea
                      value={customWish}
                      onChange={(e) => setCustomWish(e.target.value)}
                      rows={4}
                      className="w-full bg-white border-2 border-red-400 rounded-xl p-3.5 text-stone-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none font-normal leading-relaxed shadow-inner"
                      placeholder="Ví dụ: luôn dồi dào sức khỏe, luôn giữ trọn ngọn lửa nhiệt huyết với nghề và luôn hạnh phúc, an yên trên con đường phía trước..."
                    />
                    <p className="text-[11px] text-stone-500 italic">
                      * Bạn có thể tự do chỉnh sửa và thêm lời chúc riêng của mình.
                    </p>
                  </motion.div>
                ) : (
                  <motion.p
                    key="display"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed italic font-medium"
                  >
                    "{customWish}"
                  </motion.p>
                )}
              </AnimatePresence>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-red-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="font-serif font-black text-red-800 text-sm sm:text-base">
                    {TRIBUTE_DATA.closing.signOff}
                  </div>
                  <div className="text-xs font-bold text-emerald-800">
                    {TRIBUTE_DATA.closing.schoolName}
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-red-700 hover:bg-red-800 text-yellow-300 font-bold text-xs border border-yellow-300 shadow-md cursor-pointer transition-all"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-green-300" />
                      <span>Đã sao chép lời chúc!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Sao chép thông điệp</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            <div className="pt-2 text-center sm:text-left text-xs text-stone-500">
              Lưu giữ những kỷ niệm đẹp nhất niên khóa 2024 - 2027 • Trường THPT Xuân Đỉnh
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         FLOATING AUDIO CONTROLLER (WIDGET ĐĨA THAN NHẠC NỀN HIỆN ĐẠI KÈM SÓNG NHẠC)
         ========================================================================= */}
      <aside aria-label="Trình phát nhạc nền" className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <motion.div 
          whileHover={{ scale: 1.04 }}
          className="relative flex items-center space-x-2.5 sm:space-x-3 p-2 sm:px-4 sm:py-2.5 rounded-2xl bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-yellow-300 border-2 border-yellow-400 shadow-2xl"
        >
          {/* Nốt nhạc bay bổng khi đang phát */}
          {isPlaying && (
            <div className="absolute -top-7 left-3 pointer-events-none">
              <motion.span
                className="absolute text-yellow-400 font-bold text-sm"
                animate={{ y: [0, -22], opacity: [0, 1, 0], x: [0, 8] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              >
                ♪
              </motion.span>
              <motion.span
                className="absolute text-red-300 font-bold text-xs"
                animate={{ y: [0, -26], opacity: [0, 1, 0], x: [0, -8] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
              >
                ♫
              </motion.span>
            </div>
          )}
          
          <button
            onClick={togglePlay}
            className={`w-9 sm:w-10 h-9 sm:h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isPlaying
                ? 'bg-yellow-400 text-red-900 shadow-lg shadow-yellow-400/50 animate-[spin_6s_linear_infinite]'
                : 'bg-red-950 text-yellow-300 hover:bg-yellow-400 hover:text-red-900'
            }`}
            title={isPlaying ? 'Tạm dừng bài hát' : 'Phát bài ca người giáo viên nhân dân'}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-red-900" /> : <Play className="w-4 h-4 fill-yellow-300 ml-0.5" />}
          </button>

          <div className="hidden sm:block text-left pr-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-serif font-black text-yellow-300">
                {TRIBUTE_DATA.song.title}
              </span>
              {isPlaying && (
                <div className="flex items-end space-x-0.5 h-3.5">
                  {[0.1, 0.4, 0.2, 0.6, 0.3].map((delay, idx) => (
                    <motion.span
                      key={idx}
                      className="w-0.5 bg-yellow-400 rounded-full"
                      animate={{ height: ['4px', '14px', '6px', '12px', '4px'] }}
                      transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay }}
                    />
                  ))}
                </div>
              )}
            </div>
            <p className="text-[10px] text-yellow-100">
              {TRIBUTE_DATA.song.composer}
            </p>
          </div>

          <button
            onClick={toggleMute}
            className="p-1.5 rounded-lg text-yellow-200 hover:text-white hover:bg-red-900/60 transition-colors cursor-pointer"
            title={isMuted ? 'Bật tiếng' : 'Tắt tiếng'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </motion.div>
      </aside>

      {/* =========================================================================
         CỔNG CHÀO MỪNG TRI ÂN & MỞ NHẠC (WELCOME GATE DIALOG)
         Xuất hiện khi trình duyệt chặn autoplay không tiếng để người dùng chạm mở nhạc tự nhiên 100%
         ========================================================================= */}
      <AnimatePresence>
        {showWelcomeGate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md cursor-pointer"
            onClick={handleEnterWithMusic}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-md w-full bg-gradient-to-b from-[#fffbf0] via-[#fef7e6] to-[#faedd0] rounded-3xl p-4 sm:p-8 border-4 border-yellow-400 shadow-2xl text-center text-stone-800 overflow-hidden cursor-default mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Nút đóng nhanh góc trên */}
              <button
                onClick={() => setShowWelcomeGate(false)}
                className="absolute top-3 right-3 p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors cursor-pointer"
                title="Đóng thông báo"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Băng rôn đỏ niên khóa */}
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-700 text-yellow-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 border border-yellow-400 shadow">
                <Star className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300 flex-shrink-0" />
                <span>THPT Xuân Đỉnh • Tập thể 12A15 K65</span>
                <Star className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300 flex-shrink-0" />
              </div>

              {/* Tiêu đề trang trọng */}
              <h2 className="text-lg sm:text-2xl font-serif font-black text-red-800 leading-snug mb-1">
                Tri Ân Người Lái Đò Kính Yêu
              </h2>
              <h3 className="text-base sm:text-xl font-serif font-bold text-emerald-800 mb-3 sm:mb-4">
                Cô Lương Thị Kim Lưu
              </h3>

              {/* Biểu tượng đĩa nhạc xoay tròn kèm sóng âm thanh */}
              <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-5 flex items-center justify-center cursor-pointer" onClick={handleEnterWithMusic}>
                <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-stone-900 border-3 sm:border-4 border-yellow-400 shadow-xl flex items-center justify-center text-yellow-300 animate-[spin_8s_linear_infinite]">
                  <Music className="w-7 h-7 sm:w-9 sm:h-9 text-yellow-400 drop-shadow" />
                </div>
              </div>

              {/* Thông tin bài hát */}
              <div className="bg-red-50/90 border border-red-300 rounded-xl p-2.5 sm:p-3 mb-4 sm:mb-5 text-left">
                <p className="text-xs sm:text-sm font-bold text-red-900 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  <span>Bài hát: "Bài ca người giáo viên nhân dân"</span>
                </p>
                <p className="text-[10px] sm:text-[11px] text-stone-600 mt-1 pl-5">
                  Nhạc sĩ: Hoàng Vân • Âm hưởng hào hùng, trang trọng
                </p>
              </div>

              {/* Nút bấm lớn kích hoạt âm thanh */}
              <button
                onClick={handleEnterWithMusic}
                className="w-full py-3 sm:py-3.5 px-3 sm:px-5 rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-500 hover:to-red-600 text-yellow-300 font-bold text-xs sm:text-base tracking-wide border-2 border-yellow-400 shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-1.5 sm:space-x-2 cursor-pointer mb-2 animate-bounce"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-300 text-yellow-300 flex-shrink-0" />
                <span>BẬT NHẠC VÀ BẮT ĐẦU XEM TRANG</span>
              </button>

              <button
                onClick={() => setShowWelcomeGate(false)}
                className="text-[11px] sm:text-xs text-stone-500 hover:text-stone-800 underline transition-colors cursor-pointer py-1"
              >
                Vào xem trang ở chế độ im lặng
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
         LIGHTBOX MODAL (XEM ẢNH GỐC ĐẦY ĐỦ 100% PHÓNG TO)
         ========================================================================= */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-8 cursor-zoom-out"
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2.5 sm:p-3 rounded-full bg-red-700 text-yellow-300 hover:text-white hover:bg-red-800 border-2 border-yellow-300 transition-all cursor-pointer z-50 shadow-xl"
              title="Đóng xem ảnh"
            >
              <X className="w-5 h-5" />
            </button>

            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-5xl max-h-[92vh] flex flex-col items-center cursor-default bg-white p-3 sm:p-5 rounded-2xl sm:rounded-3xl border-4 border-yellow-400 shadow-2xl"
            >
              <img
                src={modalImage.src}
                alt={modalImage.title}
                className="max-w-full max-h-[70vh] sm:max-h-[74vh] object-contain rounded-xl border-2 border-red-700 shadow-md"
              />
              <div className="mt-3 text-center max-w-xl">
                <h4 className="text-base sm:text-lg font-serif font-black text-red-800">
                  {modalImage.title}
                </h4>
                <p className="text-xs font-bold text-emerald-800 mt-0.5">
                  {modalImage.subtitle}
                </p>
                {modalImage.description && (
                  <p className="text-xs text-stone-600 mt-1">
                    {modalImage.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
         FOOTER TRƯỜNG HỌC THẬP NIÊN CŨ
         ========================================================================= */}
      <footer className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-yellow-200 py-10 text-center border-t-4 border-yellow-400">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p className="font-serif font-black text-white text-base sm:text-lg tracking-wide">
            Kính dâng Người Cô Đáng Kính — Cô Lương Thị Kim Lưu
          </p>
          <p className="text-xs sm:text-sm font-medium text-yellow-300">
            Biên soạn & Thiết kế với tất cả lòng tri ân của Tập thể Lớp 12A15 (Niên khóa K65)
          </p>
          <p className="text-xs text-stone-300 pt-2 font-light">
            Trường THPT Xuân Đỉnh • Hà Nội (2024 - 2027)
          </p>
        </div>
      </footer>

    </main>
  );
}
