const quizData = {
        formulaToName: [
    { question: "H₂O", answer: "Вода", options: ["Углекислый газ", "Серная кислота", "Вода", "Аммиак"] },
    { question: "CO₂", answer: "Углекислый газ", options: ["Угарный газ", "Углекислый газ", "Сероводород", "Метан"] },
    { question: "HCl", answer: "Хлороводород", options: ["Азотная кислота", "Хлороводород", "Фосфорная кислота", "Серная кислота"] },
    { question: "H₂SO₄", answer: "Серная кислота", options: ["Азотная кислота", "Уксусная кислота", "Серная кислота", "Плавиковая кислота"] },
    { question: "NaOH", answer: "Гидроксид натрия", options: ["Гидроксид калия", "Гидроксид натрия", "Гидроксид кальция", "Гидроксид алюминия"] },
    { question: "NH₃", answer: "Аммиак", options: ["Аммиак", "Метан", "Этан", "Пропан"] },
    { question: "CH₄", answer: "Метан", options: ["Этан", "Метан", "Пропан", "Бутан"] },
    { question: "NaCl", answer: "Хлорид натрия", options: ["Хлорид калия", "Хлорид кальция", "Хлорид натрия", "Хлорид магния"] },
    { question: "CaCO₃", answer: "Карбонат кальция", options: ["Карбонат натрия", "Карбонат кальция", "Карбонат магния", "Карбонат бария"] },
    { question: "HNO₃", answer: "Азотная кислота", options: ["Азотная кислота", "Серная кислота", "Фосфорная кислота", "Соляная кислота"] },
    { question: "H₃PO₄", answer: "Фосфорная кислота", options: ["Азотная кислота", "Фосфорная кислота", "Серная кислота", "Уксусная кислота"] },
    { question: "KOH", answer: "Гидроксид калия", options: ["Гидроксид натрия", "Гидроксид калия", "Гидроксид кальция", "Гидроксид алюминия"] },
    { question: "Fe₂O₃", answer: "Оксид железа(III)", options: ["Оксид железа(II)", "Оксид железа(III)", "Оксид алюминия", "Оксид меди"] },
    { question: "Al₂O₃", answer: "Оксид алюминия", options: ["Оксид железа", "Оксид алюминия", "Оксид цинка", "Оксид магния"] },
    { question: "CuSO₄", answer: "Сульфат меди(II)", options: ["Сульфат железа", "Сульфат меди(II)", "Сульфат цинка", "Сульфат натрия"] },
    { question: "Na₂CO₃", answer: "Карбонат натрия", options: ["Карбонат кальция", "Карбонат натрия", "Карбонат калия", "Карбонат магния"] },
    { question: "H₂CO₃", answer: "Угольная кислота", options: ["Серная кислота", "Угольная кислота", "Азотная кислота", "Фосфорная кислота"] },
    { question: "SO₂", answer: "Оксид серы(IV)", options: ["Оксид серы(IV)", "Оксид серы(VI)", "Сероводород", "Серная кислота"] },
    { question: "SO₃", answer: "Оксид серы(VI)", options: ["Оксид серы(IV)", "Оксид серы(VI)", "Сернистая кислота", "Серная кислота"] },
    { question: "NO₂", answer: "Оксид азота(IV)", options: ["Оксид азота(II)", "Оксид азота(IV)", "Аммиак", "Азотная кислота"] },
    { question: "N₂O", answer: "Оксид азота(I)", options: ["Оксид азота(I)", "Оксид азота(II)", "Оксид азота(IV)", "Аммиак"] },
    { question: "NO", answer: "Оксид азота(II)", options: ["Оксид азота(I)", "Оксид азота(II)", "Оксид азота(IV)", "Азотная кислота"] },
    { question: "H₂S", answer: "Сероводород", options: ["Сероводород", "Серная кислота", "Сернистый газ", "Сероуглерод"] },
    { question: "P₂O₅", answer: "Оксид фосфора(V)", options: ["Оксид фосфора(III)", "Оксид фосфора(V)", "Фосфорная кислота", "Фосфин"] },
    { question: "CaO", answer: "Оксид кальция", options: ["Оксид магния", "Оксид кальция", "Оксид бария", "Оксид цинка"] },
    { question: "MgO", answer: "Оксид магния", options: ["Оксид кальция", "Оксид магния", "Оксид алюминия", "Оксид натрия"] },
    { question: "ZnO", answer: "Оксид цинка", options: ["Оксид меди", "Оксид цинка", "Оксид железа", "Оксид свинца"] },
    { question: "PbO", answer: "Оксид свинца(II)", options: ["Оксид свинца(II)", "Оксид свинца(IV)", "Оксид цинка", "Оксид олова"] },
    { question: "AgNO₃", answer: "Нитрат серебра", options: ["Нитрат калия", "Нитрат серебра", "Нитрат натрия", "Нитрат кальция"] },
    { question: "KCl", answer: "Хлорид калия", options: ["Хлорид натрия", "Хлорид калия", "Хлорид кальция", "Хлорид магния"] },
    { question: "FeCl₃", answer: "Хлорид железа(III)", options: ["Хлорид железа(II)", "Хлорид железа(III)", "Хлорид алюминия", "Хлорид меди"] },
    { question: "CuCl₂", answer: "Хлорид меди(II)", options: ["Хлорид меди(I)", "Хлорид меди(II)", "Хлорид железа", "Хлорид цинка"] },
    { question: "NaHCO₃", answer: "Гидрокарбонат натрия", options: ["Карбонат натрия", "Гидрокарбонат натрия", "Карбонат кальция", "Гидрокарбонат калия"] },
    { question: "Ca(OH)₂", answer: "Гидроксид кальция", options: ["Гидроксид натрия", "Гидроксид кальция", "Гидроксид магния", "Гидроксид бария"] },
    { question: "Ba(OH)₂", answer: "Гидроксид бария", options: ["Гидроксид кальция", "Гидроксид бария", "Гидроксид магния", "Гидроксид стронция"] },
    { question: "FeSO₄", answer: "Сульфат железа(II)", options: ["Сульфат железа(II)", "Сульфат железа(III)", "Сульфат меди", "Сульфат цинка"] },
    { question: "Fe₂(SO₄)₃", answer: "Сульфат железа(III)", options: ["Сульфат железа(II)", "Сульфат железа(III)", "Сульфат алюминия", "Сульфат меди"] },
    { question: "NaNO₃", answer: "Нитрат натрия", options: ["Нитрат калия", "Нитрат натрия", "Нитрат кальция", "Нитрат серебра"] },
    { question: "KNO₃", answer: "Нитрат калия", options: ["Нитрат натрия", "Нитрат калия", "Нитрат кальция", "Нитрат бария"] },
    { question: "Ca(NO₃)₂", answer: "Нитрат кальция", options: ["Нитрат магния", "Нитрат кальция", "Нитрат бария", "Нитрат стронция"] },
    { question: "Na₂SO₄", answer: "Сульфат натрия", options: ["Сульфат калия", "Сульфат натрия", "Сульфат магния", "Сульфат алюминия"] },
    { question: "K₂SO₄", answer: "Сульфат калия", options: ["Сульфат натрия", "Сульфат калия", "Сульфат кальция", "Сульфат бария"] },
    { question: "CaSO₄", answer: "Сульфат кальция", options: ["Сульфат магния", "Сульфат кальция", "Сульфат бария", "Сульфат стронция"] },
    { question: "BaSO₄", answer: "Сульфат бария", options: ["Сульфат кальция", "Сульфат бария", "Сульфат магния", "Сульфат алюминия"] },
    { question: "Na₃PO₄", answer: "Фосфат натрия", options: ["Фосфат калия", "Фосфат натрия", "Фосфат кальция", "Фосфат магния"] },
    { question: "K₃PO₄", answer: "Фосфат калия", options: ["Фосфат натрия", "Фосфат калия", "Фосфат кальция", "Фосфат алюминия"] },
    { question: "Ca₃(PO₄)₂", answer: "Фосфат кальция", options: ["Фосфат магния", "Фосфат кальция", "Фосфат бария", "Фосфат железа"] },
    { question: "Na₂S", answer: "Сульфид натрия", options: ["Сульфид калия", "Сульфид натрия", "Сульфид кальция", "Сульфид алюминия"] },
    { question: "K₂S", answer: "Сульфид калия", options: ["Сульфид натрия", "Сульфид калия", "Сульфид кальция", "Сульфид магния"] },
    { question: "CaS", answer: "Сульфид кальция", options: ["Сульфид магния", "Сульфид кальция", "Сульфид бария", "Сульфид железа"] },
    { question: "AlCl₃", answer: "Хлорид алюминия", options: ["Хлорид железа", "Хлорид алюминия", "Хлорид цинка", "Хлорид меди"] },
    { question: "ZnCl₂", answer: "Хлорид цинка", options: ["Хлорид меди", "Хлорид цинка", "Хлорид железа", "Хлорид алюминия"] },
    { question: "HgCl₂", answer: "Хлорид ртути(II)", options: ["Хлорид ртути(I)", "Хлорид ртути(II)", "Хлорид свинца", "Хлорид серебра"] },
    { question: "AgCl", answer: "Хлорид серебра", options: ["Хлорид натрия", "Хлорид серебра", "Хлорид кальция", "Хлорид бария"] },
    { question: "PbCl₂", answer: "Хлорид свинца(II)", options: ["Хлорид свинца(II)", "Хлорид свинца(IV)", "Хлорид олова", "Хлорид ртути"] },
    { question: "SnCl₂", answer: "Хлорид олова(II)", options: ["Хлорид олова(II)", "Хлорид олова(IV)", "Хлорид свинца", "Хлорид цинка"] },
    { question: "SnCl₄", answer: "Хлорид олова(IV)", options: ["Хлорид олова(II)", "Хлорид олова(IV)", "Хлорид свинца", "Хлорид ртути"] },
    { question: "NH₄Cl", answer: "Хлорид аммония", options: ["Хлорид натрия", "Хлорид аммония", "Хлорид калия", "Хлорид кальция"] },
    { question: "NH₄NO₃", answer: "Нитрат аммония", options: ["Нитрат натрия", "Нитрат аммония", "Нитрат калия", "Нитрат кальция"] },
    { question: "(NH₄)₂SO₄", answer: "Сульфат аммония", options: ["Сульфат натрия", "Сульфат аммония", "Сульфат калия", "Сульфат кальция"] },
    { question: "NaBr", answer: "Бромид натрия", options: ["Бромид калия", "Бромид натрия", "Бромид кальция", "Бромид магния"] },
    { question: "KBr", answer: "Бромид калия", options: ["Бромид натрия", "Бромид калия", "Бромид кальция", "Бромид алюминия"] },
    { question: "CaBr₂", answer: "Бромид кальция", options: ["Бромид магния", "Бромид кальция", "Бромид бария", "Бромид стронция"] },
    { question: "NaI", answer: "Иодид натрия", options: ["Иодид калия", "Иодид натрия", "Иодид кальция", "Иодид магния"] },
    { question: "KI", answer: "Иодид калия", options: ["Иодид натрия", "Иодид калия", "Иодид кальция", "Иодид алюминия"] },
    { question: "CaI₂", answer: "Иодид кальция", options: ["Иодид магния", "Иодид кальция", "Иодид бария", "Иодид стронция"] },
    { question: "NaF", answer: "Фторид натрия", options: ["Фторид калия", "Фторид натрия", "Фторид кальция", "Фторид магния"] },
    { question: "KF", answer: "Фторид калия", options: ["Фторид натрия", "Фторид калия", "Фторид кальция", "Фторид алюминия"] },
    { question: "CaF₂", answer: "Фторид кальция", options: ["Фторид магния", "Фторид кальция", "Фторид бария", "Фторид стронция"] },
    { question: "Al₂(SO₄)₃", answer: "Сульфат алюминия", options: ["Сульфат железа", "Сульфат алюминия", "Сульфат цинка", "Сульфат меди"] },
    { question: "ZnSO₄", answer: "Сульфат цинка", options: ["Сульфат меди", "Сульфат цинка", "Сульфат железа", "Сульфат алюминия"] },
    { question: "Cu(NO₃)₂", answer: "Нитрат меди(II)", options: ["Нитрат меди(I)", "Нитрат меди(II)", "Нитрат железа", "Нитрат серебра"] },
    { question: "Ag₂SO₄", answer: "Сульфат серебра", options: ["Сульфат натрия", "Сульфат серебра", "Сульфат калия", "Сульфат кальция"] },
    { question: "Pb(NO₃)₂", answer: "Нитрат свинца(II)", options: ["Нитрат свинца(II)", "Нитрат свинца(IV)", "Нитрат олова", "Нитрат ртути"] },
    { question: "Hg(NO₃)₂", answer: "Нитрат ртути(II)", options: ["Нитрат ртути(I)", "Нитрат ртути(II)", "Нитрат свинца", "Нитрат серебра"] },
    { question: "Fe(NO₃)₃", answer: "Нитрат железа(III)", options: ["Нитрат железа(II)", "Нитрат железа(III)", "Нитрат алюминия", "Нитрат меди"] },
    { question: "Cr₂O₃", answer: "Оксид хрома(III)", options: ["Оксид хрома(III)", "Оксид хрома(VI)", "Оксид железа", "Оксид алюминия"] },
    { question: "CrO₃", answer: "Оксид хрома(VI)", options: ["Оксид хрома(III)", "Оксид хрома(VI)", "Оксид марганца", "Оксид ванадия"] },
    { question: "MnO₂", answer: "Оксид марганца(IV)", options: ["Оксид марганца(II)", "Оксид марганца(IV)", "Оксид хрома", "Оксид железа"] },
    { question: "KMnO₄", answer: "Перманганат калия", options: ["Перманганат натрия", "Перманганат калия", "Перманганат кальция", "Перманганат бария"] },
    { question: "K₂Cr₂O₇", answer: "Дихромат калия", options: ["Дихромат натрия", "Дихромат калия", "Дихромат кальция", "Дихромат аммония"] },
    { question: "Na₂CrO₄", answer: "Хромат натрия", options: ["Хромат калия", "Хромат натрия", "Хромат кальция", "Хромат бария"] },
    { question: "K₂CrO₄", answer: "Хромат калия", options: ["Хромат натрия", "Хромат калия", "Хромат кальция", "Хромат алюминия"] },
    { question: "Na₂SiO₃", answer: "Силикат натрия", options: ["Силикат калия", "Силикат натрия", "Силикат кальция", "Силикат магния"] },
    { question: "K₂SiO₃", answer: "Силикат калия", options: ["Силикат натрия", "Силикат калия", "Силикат кальция", "Силикат бария"] },
    { question: "CaSiO₃", answer: "Силикат кальция", options: ["Силикат магния", "Силикат кальция", "Силикат бария", "Силикат алюминия"] },
    { question: "NaNO₂", answer: "Нитрит натрия", options: ["Нитрит калия", "Нитрит натрия", "Нитрит кальция", "Нитрит бария"] },
    { question: "KNO₂", answer: "Нитрит калия", options: ["Нитрит натрия", "Нитрит калия", "Нитрит кальция", "Нитрит аммония"] },
    { question: "Ca(NO₂)₂", answer: "Нитрит кальция", options: ["Нитрит магния", "Нитрит кальция", "Нитрит бария", "Нитрит стронция"] },
    { question: "Na₂O₂", answer: "Пероксид натрия", options: ["Пероксид калия", "Пероксид натрия", "Пероксид кальция", "Пероксид бария"] },
    { question: "K₂O₂", answer: "Пероксид калия", options: ["Пероксид натрия", "Пероксид калия", "Пероксид кальция", "Пероксид алюминия"] },
    { question: "CaO₂", answer: "Пероксид кальция", options: ["Пероксид магния", "Пероксид кальция", "Пероксид бария", "Пероксид стронция"] },
    { question: "BaO₂", answer: "Пероксид бария", options: ["Пероксид кальция", "Пероксид бария", "Пероксид магния", "Пероксид алюминия"] },
    { question: "H₂O₂", answer: "Пероксид водорода", options: ["Вода", "Пероксид водорода", "Серная кислота", "Азотная кислота"] },
    { question: "C₂H₅OH", answer: "Этанол", options: ["Метанол", "Этанол", "Пропанол", "Бутанол"] },
    { question: "CH₃OH", answer: "Метанол", options: ["Метанол", "Этанол", "Пропанол", "Бутанол"] },
    { question: "C₃H₇OH", answer: "Пропанол", options: ["Метанол", "Этанол", "Пропанол", "Бутанол"] },
    { question: "C₄H₉OH", answer: "Бутанол", options: ["Метанол", "Этанол", "Пропанол", "Бутанол"] },
    { question: "CH₃COOH", answer: "Уксусная кислота", options: ["Муравьиная кислота", "Уксусная кислота", "Масляная кислота", "Пропионовая кислота"] },
    { question: "HCOOH", answer: "Муравьиная кислота", options: ["Муравьиная кислота", "Уксусная кислота", "Масляная кислота", "Пропионовая кислота"] },
    { question: "C₃H₇COOH", answer: "Масляная кислота", options: ["Муравьиная кислота", "Уксусная кислота", "Масляная кислота", "Пропионовая кислота"] },
    { question: "C₂H₅COOH", answer: "Пропионовая кислота", options: ["Муравьиная кислота", "Уксусная кислота", "Пропионовая кислота", "Масляная кислота"] },
    { question: "C₆H₁₂O₆", answer: "Глюкоза", options: ["Глюкоза", "Фруктоза", "Сахароза", "Лактоза"] },
    { question: "C₁₂H₂₂O₁₁", answer: "Сахароза", options: ["Глюкоза", "Фруктоза", "Сахароза", "Лактоза"] },
    { question: "C₆H₆", answer: "Бензол", options: ["Бензол", "Толуол", "Ксилол", "Нафталин"] },
    { question: "C₇H₈", answer: "Толуол", options: ["Бензол", "Толуол", "Ксилол", "Нафталин"] },
    { question: "C₈H₁₀", answer: "Ксилол", options: ["Бензол", "Толуол", "Ксилол", "Нафталин"] },
    { question: "C₁₀H₈", answer: "Нафталин", options: ["Бензол", "Толуол", "Ксилол", "Нафталин"] }
],
        nameToFormula: [
    { question: "Вода", answer: "H₂O", options: ["CO₂", "H₂O", "NH₃", "CH₄"] },
    { question: "Серная кислота", answer: "H₂SO₄", options: ["HCl", "HNO₃", "H₂SO₄", "H₃PO₄"] },
    { question: "Аммиак", answer: "NH₃", options: ["NH₃", "CH₄", "CO₂", "H₂O"] },
    { question: "Метан", answer: "CH₄", options: ["C₂H₆", "CH₄", "C₃H₈", "C₄H₁₀"] },
    { question: "Углекислый газ", answer: "CO₂", options: ["CO", "CO₂", "SO₂", "NO₂"] },
    { question: "Хлороводород", answer: "HCl", options: ["HCl", "HBr", "HI", "HF"] },
    { question: "Азотная кислота", answer: "HNO₃", options: ["HNO₃", "H₂SO₄", "H₃PO₄", "HClO₄"] },
    { question: "Фосфорная кислота", answer: "H₃PO₄", options: ["HNO₃", "H₂SO₄", "H₃PO₄", "H₂CO₃"] },
    { question: "Уксусная кислота", answer: "CH₃COOH", options: ["HCOOH", "CH₃COOH", "C₂H₅COOH", "C₃H₇COOH"] },
    { question: "Муравьиная кислота", answer: "HCOOH", options: ["HCOOH", "CH₃COOH", "C₂H₅COOH", "C₃H₇COOH"] },
    { question: "Гидроксид натрия", answer: "NaOH", options: ["NaOH", "KOH", "Ca(OH)₂", "Mg(OH)₂"] },
    { question: "Гидроксид калия", answer: "KOH", options: ["NaOH", "KOH", "Ca(OH)₂", "Al(OH)₃"] },
    { question: "Гидроксид кальция", answer: "Ca(OH)₂", options: ["NaOH", "KOH", "Ca(OH)₂", "Ba(OH)₂"] },
    { question: "Гидроксид алюминия", answer: "Al(OH)₃", options: ["Al(OH)₃", "Fe(OH)₃", "Zn(OH)₂", "Cu(OH)₂"] },
    { question: "Оксид кальция", answer: "CaO", options: ["CaO", "MgO", "Na₂O", "Al₂O₃"] },
    { question: "Оксид магния", answer: "MgO", options: ["MgO", "CaO", "BaO", "ZnO"] },
    { question: "Оксид алюминия", answer: "Al₂O₃", options: ["Al₂O₃", "Fe₂O₃", "Cr₂O₃", "SiO₂"] },
    { question: "Оксид железа(III)", answer: "Fe₂O₃", options: ["FeO", "Fe₂O₃", "Fe₃O₄", "Cr₂O₃"] },
    { question: "Оксид углерода(II)", answer: "CO", options: ["CO", "CO₂", "C₃O₂", "CH₄"] },
    { question: "Оксид серы(IV)", answer: "SO₂", options: ["SO₂", "SO₃", "H₂SO₄", "H₂S"] },
    { question: "Оксид серы(VI)", answer: "SO₃", options: ["SO₂", "SO₃", "H₂SO₄", "H₂SO₃"] },
    { question: "Оксид азота(II)", answer: "NO", options: ["NO", "NO₂", "N₂O", "N₂O₅"] },
    { question: "Оксид азота(IV)", answer: "NO₂", options: ["NO", "NO₂", "N₂O", "N₂O₄"] },
    { question: "Пероксид водорода", answer: "H₂O₂", options: ["H₂O", "H₂O₂", "HO₂", "H₃O"] },
    { question: "Хлорид натрия", answer: "NaCl", options: ["NaCl", "KCl", "CaCl₂", "MgCl₂"] },
    { question: "Хлорид калия", answer: "KCl", options: ["NaCl", "KCl", "LiCl", "RbCl"] },
    { question: "Хлорид кальция", answer: "CaCl₂", options: ["CaCl₂", "MgCl₂", "BaCl₂", "SrCl₂"] },
    { question: "Хлорид алюминия", answer: "AlCl₃", options: ["AlCl₃", "FeCl₃", "ZnCl₂", "CuCl₂"] },
    { question: "Сульфат натрия", answer: "Na₂SO₄", options: ["Na₂SO₄", "K₂SO₄", "CaSO₄", "MgSO₄"] },
    { question: "Сульфат калия", answer: "K₂SO₄", options: ["Na₂SO₄", "K₂SO₄", "(NH₄)₂SO₄", "CaSO₄"] },
    { question: "Сульфат кальция", answer: "CaSO₄", options: ["CaSO₄", "BaSO₄", "MgSO₄", "SrSO₄"] },
    { question: "Сульфат алюминия", answer: "Al₂(SO₄)₃", options: ["Al₂(SO₄)₃", "Fe₂(SO₄)₃", "CuSO₄", "ZnSO₄"] },
    { question: "Карбонат натрия", answer: "Na₂CO₃", options: ["Na₂CO₃", "K₂CO₃", "CaCO₃", "MgCO₃"] },
    { question: "Карбонат кальция", answer: "CaCO₃", options: ["CaCO₃", "MgCO₃", "BaCO₃", "SrCO₃"] },
    { question: "Нитрат калия", answer: "KNO₃", options: ["KNO₃", "NaNO₃", "Ca(NO₃)₂", "NH₄NO₃"] },
    { question: "Нитрат серебра", answer: "AgNO₃", options: ["AgNO₃", "Cu(NO₃)₂", "Pb(NO₃)₂", "Hg(NO₃)₂"] },
    { question: "Фосфат кальция", answer: "Ca₃(PO₄)₂", options: ["Ca₃(PO₄)₂", "CaHPO₄", "Ca(H₂PO₄)₂", "Mg₃(PO₄)₂"] },
    { question: "Сульфид железа(II)", answer: "FeS", options: ["FeS", "Fe₂S₃", "CuS", "ZnS"] },
    { question: "Перманганат калия", answer: "KMnO₄", options: ["KMnO₄", "K₂Cr₂O₇", "KClO₃", "KNO₃"] },
    { question: "Дихромат калия", answer: "K₂Cr₂O₇", options: ["K₂Cr₂O₇", "K₂CrO₄", "KMnO₄", "KClO₄"] },
    { question: "Хромат натрия", answer: "Na₂CrO₄", options: ["Na₂CrO₄", "Na₂Cr₂O₇", "Na₂SO₄", "Na₂CO₃"] },
    { question: "Гидрокарбонат натрия", answer: "NaHCO₃", options: ["NaHCO₃", "Na₂CO₃", "KHCO₃", "Ca(HCO₃)₂"] },
    { question: "Сероводород", answer: "H₂S", options: ["H₂S", "SO₂", "H₂SO₄", "HSO₃"] },
    { question: "Этанол", answer: "C₂H₅OH", options: ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "C₄H₉OH"] },
    { question: "Метанол", answer: "CH₃OH", options: ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "C₄H₉OH"] },
    { question: "Глюкоза", answer: "C₆H₁₂O₆", options: ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₅H₁₀O₅", "C₄H₈O₂"] },
    { question: "Сахароза", answer: "C₁₂H₂₂O₁₁", options: ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₅H₁₀O₅", "C₄H₈O₂"] },
    { question: "Бензол", answer: "C₆H₆", options: ["C₆H₆", "C₇H₈", "C₈H₁₀", "C₁₀H₈"] },
    { question: "Толуол", answer: "C₇H₈", options: ["C₆H₆", "C₇H₈", "C₈H₁₀", "C₁₀H₈"] },
    { question: "Ацетилен", answer: "C₂H₂", options: ["CH₄", "C₂H₂", "C₂H₄", "C₂H₆"] },
    { question: "Этилен", answer: "C₂H₄", options: ["CH₄", "C₂H₂", "C₂H₄", "C₂H₆"] },
    { question: "Пропан", answer: "C₃H₈", options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"] },
    { question: "Бутан", answer: "C₄H₁₀", options: ["C₂H₆", "C₃H₈", "C₄H₁₀", "C₅H₁₂"] },
    { question: "Пентан", answer: "C₅H₁₂", options: ["C₃H₈", "C₄H₁₀", "C₅H₁₂", "C₆H₁₄"] },
    { question: "Гексан", answer: "C₆H₁₄", options: ["C₄H₁₀", "C₅H₁₂", "C₆H₁₄", "C₇H₁₆"] },
    { question: "Ацетат натрия", answer: "CH₃COONa", options: ["CH₃COONa", "CH₃COOK", "CH₃COOH", "C₂H₅COONa"] },
    { question: "Фторид кальция", answer: "CaF₂", options: ["CaF₂", "NaF", "KF", "MgF₂"] },
    { question: "Бромид калия", answer: "KBr", options: ["NaBr", "KBr", "CaBr₂", "MgBr₂"] },
    { question: "Иодид натрия", answer: "NaI", options: ["NaI", "KI", "CaI₂", "MgI₂"] },
    { question: "Сульфид натрия", answer: "Na₂S", options: ["Na₂S", "K₂S", "CaS", "MgS"] },
    { question: "Сульфит натрия", answer: "Na₂SO₃", options: ["Na₂SO₃", "Na₂SO₄", "Na₂S", "Na₂CO₃"] },
    { question: "Тиосульфат натрия", answer: "Na₂S₂O₃", options: ["Na₂S₂O₃", "Na₂SO₄", "Na₂SO₃", "Na₂S"] },
    { question: "Гипохлорит натрия", answer: "NaClO", options: ["NaClO", "NaClO₂", "NaClO₃", "NaClO₄"] },
    { question: "Хлорат калия", answer: "KClO₃", options: ["KClO", "KClO₂", "KClO₃", "KClO₄"] },
    { question: "Перхлорат натрия", answer: "NaClO₄", options: ["NaClO", "NaClO₂", "NaClO₃", "NaClO₄"] },
    { question: "Цианид калия", answer: "KCN", options: ["NaCN", "KCN", "Ca(CN)₂", "Mg(CN)₂"] },
    { question: "Силикат натрия", answer: "Na₂SiO₃", options: ["Na₂SiO₃", "K₂SiO₃", "CaSiO₃", "MgSiO₃"] },
    { question: "Ацетат свинца(II)", answer: "Pb(CH₃COO)₂", options: ["Pb(CH₃COO)₂", "PbCl₂", "PbSO₄", "Pb(NO₃)₂"] },
    { question: "Сульфат бария", answer: "BaSO₄", options: ["BaSO₄", "BaCO₃", "BaCl₂", "Ba(NO₃)₂"] },
    { question: "Карбид кальция", answer: "CaC₂", options: ["CaC₂", "CaCO₃", "CaO", "Ca(OH)₂"] },
    { question: "Гидрид лития", answer: "LiH", options: ["LiH", "NaH", "KH", "CaH₂"] },
    { question: "Озон", answer: "O₃", options: ["O₂", "O₃", "H₂O₂", "CO₂"] },
    { question: "Фосген", answer: "COCl₂", options: ["COCl₂", "CO₂", "CCl₄", "CHCl₃"] },
    { question: "Хлороформ", answer: "CHCl₃", options: ["CHCl₃", "CCl₄", "CH₂Cl₂", "CH₃Cl"] },
    { question: "Тетрахлорметан", answer: "CCl₄", options: ["CHCl₃", "CCl₄", "CH₂Cl₂", "CH₃Cl"] },
    { question: "Формальдегид", answer: "HCHO", options: ["HCHO", "CH₃CHO", "C₂H₅CHO", "C₆H₅CHO"] },
    { question: "Ацетон", answer: "CH₃COCH₃", options: ["CH₃COCH₃", "CH₃CHO", "C₂H₅OH", "CH₃COOH"] },
    { question: "Мочевина", answer: "CO(NH₂)₂", options: ["CO(NH₂)₂", "NH₄Cl", "NH₄NO₃", "(NH₄)₂SO₄"] },
    { question: "Гидроксид меди(II)", answer: "Cu(OH)₂", options: ["Cu(OH)₂", "CuO", "CuCl₂", "CuSO₄"] },
    { question: "Оксид цинка", answer: "ZnO", options: ["ZnO", "ZnCl₂", "ZnSO₄", "Zn(OH)₂"] },
    { question: "Сульфид свинца(II)", answer: "PbS", options: ["PbS", "PbO", "PbCl₂", "PbSO₄"] },
    { question: "Нитрит натрия", answer: "NaNO₂", options: ["NaNO₂", "NaNO₃", "Na₂SO₃", "Na₂CO₃"] },
    { question: "Пероксид натрия", answer: "Na₂O₂", options: ["Na₂O", "Na₂O₂", "NaOH", "NaH"] },
    { question: "Гидрид кальция", answer: "CaH₂", options: ["CaH₂", "CaO", "Ca(OH)₂", "CaCO₃"] },
    { question: "Карбид кремния", answer: "SiC", options: ["SiC", "SiO₂", "SiCl₄", "SiH₄"] },
    { question: "Силицид магния", answer: "Mg₂Si", options: ["Mg₂Si", "MgO", "MgCl₂", "MgSO₄"] },
    { question: "Фторид водорода", answer: "HF", options: ["HF", "HCl", "HBr", "HI"] },
    { question: "Бромид водорода", answer: "HBr", options: ["HCl", "HBr", "HI", "HF"] },
    { question: "Иодид водорода", answer: "HI", options: ["HCl", "HBr", "HI", "H₂S"] },
    { question: "Сульфат меди(II)", answer: "CuSO₄", options: ["CuSO₄", "CuCl₂", "Cu(NO₃)₂", "CuO"] },
    { question: "Нитрат меди(II)", answer: "Cu(NO₃)₂", options: ["Cu(NO₃)₂", "CuSO₄", "CuCl₂", "CuO"] },
    { question: "Хлорид меди(II)", answer: "CuCl₂", options: ["CuCl₂", "CuSO₄", "Cu(NO₃)₂", "CuO"] },
    { question: "Оксид меди(II)", answer: "CuO", options: ["CuO", "Cu₂O", "CuCl₂", "CuSO₄"] },
    { question: "Оксид меди(I)", answer: "Cu₂O", options: ["Cu₂O", "CuO", "CuCl", "CuSO₄"] },
    { question: "Сульфат железа(II)", answer: "FeSO₄", options: ["FeSO₄", "Fe₂(SO₄)₃", "FeCl₂", "FeCl₃"] },
    { question: "Хлорид железа(III)", answer: "FeCl₃", options: ["FeCl₂", "FeCl₃", "FeSO₄", "Fe₂O₃"] },
    { question: "Оксид хрома(III)", answer: "Cr₂O₃", options: ["CrO", "Cr₂O₃", "CrO₃", "K₂Cr₂O₇"] },
    { question: "Оксид хрома(VI)", answer: "CrO₃", options: ["CrO", "Cr₂O₃", "CrO₃", "K₂CrO₄"] },
    { question: "Дихромат аммония", answer: "(NH₄)₂Cr₂O₇", options: ["(NH₄)₂Cr₂O₇", "NH₄Cl", "NH₄NO₃", "(NH₄)₂SO₄"] },
    { question: "Хромат калия", answer: "K₂CrO₄", options: ["K₂CrO₄", "K₂Cr₂O₇", "KMnO₄", "KClO₄"] },
    { question: "Персульфат калия", answer: "K₂S₂O₈", options: ["K₂S₂O₈", "K₂SO₄", "K₂S", "K₂SO₃"] },
    { question: "Тиоцианат калия", answer: "KSCN", options: ["KSCN", "KCN", "KClO₃", "KMnO₄"] },
    { question: "Ферроцианид калия", answer: "K₄[Fe(CN)₆]", options: ["K₄[Fe(CN)₆]", "K₃[Fe(CN)₆]", "KSCN", "KCN"] },
    { question: "Феррицианид калия", answer: "K₃[Fe(CN)₆]", options: ["K₄[Fe(CN)₆]", "K₃[Fe(CN)₆]", "KSCN", "KCN"] },
    { question: "Гексацианоферрат(II) калия", answer: "K₄[Fe(CN)₆]", options: ["K₄[Fe(CN)₆]", "K₃[Fe(CN)₆]", "K₂Cr₂O₇", "KMnO₄"] },
    { question: "Гексацианоферрат(III) калия", answer: "K₃[Fe(CN)₆]", options: ["K₄[Fe(CN)₆]", "K₃[Fe(CN)₆]", "K₂CrO₄", "KSCN"] }
],
        valency: [
    { question: "Валентность водорода", answer: "I", options: ["I", "II", "III", "IV"] },
    { question: "Валентность кислорода", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность азота в NH₃", answer: "III", options: ["I", "II", "III", "IV"] },
    { question: "Валентность углерода в CH₄", answer: "IV", options: ["I", "II", "III", "IV"] },
    { question: "Валентность серы в H₂S", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность хлора в HCl", answer: "I", options: ["I", "II", "III", "IV"] },
    { question: "Валентность фтора в HF", answer: "I", options: ["I", "II", "III", "IV"] },
    { question: "Валентность азота в N₂", answer: "III", options: ["I", "II", "III", "IV"] },
    { question: "Валентность фосфора в PH₃", answer: "III", options: ["I", "II", "III", "IV"] },
    { question: "Валентность кремния в SiH₄", answer: "IV", options: ["I", "II", "III", "IV"] },
    { question: "Валентность брома в HBr", answer: "I", options: ["I", "II", "III", "IV"] },
    { question: "Валентность йода в HI", answer: "I", options: ["I", "II", "III", "IV"] },
    { question: "Валентность серы в SO₂", answer: "IV", options: ["II", "IV", "VI", "I"] },
    { question: "Валентность серы в SO₃", answer: "VI", options: ["II", "IV", "VI", "I"] },
    { question: "Валентность азота в NO", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность азота в NO₂", answer: "IV", options: ["II", "III", "IV", "V"] },
    { question: "Валентность углерода в CO₂", answer: "IV", options: ["II", "III", "IV", "I"] },
    { question: "Валентность углерода в CCl₄", answer: "IV", options: ["I", "II", "III", "IV"] },
    { question: "Валентность алюминия в AlCl₃", answer: "III", options: ["I", "II", "III", "IV"] },
    { question: "Валентность натрия в NaCl", answer: "I", options: ["I", "II", "III", "IV"] },
    { question: "Валентность калия в KBr", answer: "I", options: ["I", "II", "III", "IV"] },
    { question: "Валентность магния в MgO", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность кальция в CaCl₂", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность бария в BaSO₄", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность железа в FeCl₂", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность железа в FeCl₃", answer: "III", options: ["II", "III", "IV", "I"] },
    { question: "Валентность меди в CuO", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность цинка в ZnO", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность серебра в Ag₂O", answer: "I", options: ["I", "II", "III", "IV"] },
    { question: "Валентность ртути в HgCl₂", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность марганца в MnO₂", answer: "IV", options: ["II", "III", "IV", "VII"] },
    { question: "Валентность хрома в CrCl₃", answer: "III", options: ["II", "III", "IV", "VI"] },
    { question: "Валентность свинца в PbO", answer: "II", options: ["I", "II", "IV", "III"] },
    { question: "Валентность олова в SnCl₂", answer: "II", options: ["II", "IV", "I", "III"] },
    { question: "Валентность вольфрама в WO₃", answer: "VI", options: ["II", "IV", "VI", "III"] },
    { question: "Валентность ванадия в V₂O₅", answer: "V", options: ["II", "III", "V", "IV"] },
    { question: "Валентность титана в TiO₂", answer: "IV", options: ["II", "III", "IV", "I"] },
    { question: "Валентность никеля в NiO", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность кобальта в CoCl₂", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность бериллия в BeO", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность лития в Li₂O", answer: "I", options: ["I", "II", "III", "IV"] },
    { question: "Валентность рубидия в RbCl", answer: "I", options: ["I", "II", "III", "IV"] },
    { question: "Валентность цезия в CsF", answer: "I", options: ["I", "II", "III", "IV"] },
    { question: "Валентность бора в BCl₃", answer: "III", options: ["I", "II", "III", "IV"] },
    { question: "Валентность германия в GeH₄", answer: "IV", options: ["II", "III", "IV", "I"] },
    { question: "Валентность сурьмы в SbCl₃", answer: "III", options: ["III", "V", "I", "II"] },
    { question: "Валентность висмута в Bi₂O₃", answer: "III", options: ["III", "V", "I", "II"] },
    { question: "Валентность мышьяка в AsH₃", answer: "III", options: ["III", "V", "II", "I"] },
    { question: "Валентность селена в H₂Se", answer: "II", options: ["II", "IV", "VI", "I"] },
    { question: "Валентность теллура в H₂Te", answer: "II", options: ["II", "IV", "VI", "I"] },
    { question: "Валентность урана в UO₂", answer: "IV", options: ["III", "IV", "VI", "II"] },
    { question: "Валентность тория в ThO₂", answer: "IV", options: ["II", "III", "IV", "I"] },
    { question: "Валентность палладия в PdCl₂", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность платины в PtCl₄", answer: "IV", options: ["II", "IV", "I", "III"] },
    { question: "Валентность золота в AuCl₃", answer: "III", options: ["I", "III", "II", "IV"] },
    { question: "Валентность гафния в HfO₂", answer: "IV", options: ["II", "III", "IV", "I"] },
    { question: "Валентность циркония в ZrCl₄", answer: "IV", options: ["II", "III", "IV", "I"] },
    { question: "Валентность ниобия в NbCl₅", answer: "V", options: ["III", "IV", "V", "II"] },
    { question: "Валентность молибдена в MoO₃", answer: "VI", options: ["II", "IV", "VI", "III"] },
    { question: "Валентность технеция в Tc₂O₇", answer: "VII", options: ["IV", "VI", "VII", "II"] },
    { question: "Валентность рения в Re₂O₇", answer: "VII", options: ["IV", "VI", "VII", "III"] },
    { question: "Валентность тантала в TaCl₅", answer: "V", options: ["III", "IV", "V", "II"] },
    { question: "Валентность осмия в OsO₄", answer: "VIII", options: ["IV", "VI", "VIII", "II"] },
    { question: "Валентность рутения в RuO₄", answer: "VIII", options: ["IV", "VI", "VIII", "II"] },
    { question: "Валентность родия в RhCl₃", answer: "III", options: ["II", "III", "IV", "I"] },
    { question: "Валентность иридия в IrCl₃", answer: "III", options: ["II", "III", "IV", "I"] },
    { question: "Валентность кадмия в CdO", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность индия в InCl₃", answer: "III", options: ["I", "II", "III", "IV"] },
    { question: "Валентность таллия в TlCl", answer: "I", options: ["I", "II", "III", "IV"] },
    { question: "Валентность олова в SnO₂", answer: "IV", options: ["II", "IV", "I", "III"] },
    { question: "Валентность свинца в PbO₂", answer: "IV", options: ["II", "IV", "I", "III"] },
    { question: "Валентность висмута в BiCl₅", answer: "V", options: ["III", "V", "I", "II"] },
    { question: "Валентность сурьмы в SbCl₅", answer: "V", options: ["III", "V", "I", "II"] },
    { question: "Валентность теллура в TeO₂", answer: "IV", options: ["II", "IV", "VI", "I"] },
    { question: "Валентность полония в PoO₂", answer: "IV", options: ["II", "IV", "VI", "I"] },
    { question: "Валентность актиния в AcCl₃", answer: "III", options: ["II", "III", "IV", "I"] },
    { question: "Валентность протактиния в PaCl₅", answer: "V", options: ["III", "IV", "V", "II"] },
    { question: "Валентность нептуния в NpO₂", answer: "IV", options: ["III", "IV", "V", "VI"] },
    { question: "Валентность плутония в PuO₂", answer: "IV", options: ["III", "IV", "V", "VI"] },
    { question: "Валентность америция в AmCl₃", answer: "III", options: ["II", "III", "IV", "V"] },
    { question: "Валентность кюрия в CmCl₃", answer: "III", options: ["II", "III", "IV", "V"] },
    { question: "Валентность берклия в BkCl₃", answer: "III", options: ["II", "III", "IV", "V"] },
    { question: "Валентность калифорния в CfCl₃", answer: "III", options: ["II", "III", "IV", "V"] },
    { question: "Валентность эйнштейния в EsCl₃", answer: "III", options: ["II", "III", "IV", "V"] },
    { question: "Валентность фермия в FmCl₃", answer: "III", options: ["II", "III", "IV", "V"] },
    { question: "Валентность менделевия в MdCl₃", answer: "III", options: ["II", "III", "IV", "V"] },
    { question: "Валентность нобелия в NoCl₃", answer: "III", options: ["II", "III", "IV", "V"] },
    { question: "Валентность лоуренсия в LrCl₃", answer: "III", options: ["II", "III", "IV", "V"] },
    { question: "Валентность резерфордия в RfCl₄", answer: "IV", options: ["III", "IV", "V", "II"] },
    { question: "Валентность дубния в DbCl₅", answer: "V", options: ["III", "IV", "V", "VI"] },
    { question: "Валентность сиборгия в SgO₃", answer: "VI", options: ["IV", "V", "VI", "III"] },
    { question: "Валентность бория в Bh₂O₇", answer: "VII", options: ["V", "VI", "VII", "IV"] },
    { question: "Валентность хассия в HsO₄", answer: "VIII", options: ["VI", "VII", "VIII", "IV"] },
    { question: "Валентность мейтнерия в MtCl₄", answer: "IV", options: ["II", "III", "IV", "V"] },
    { question: "Валентность дармштадтия в DsCl₄", answer: "IV", options: ["II", "III", "IV", "V"] },
    { question: "Валентность рентгения в RgCl", answer: "I", options: ["I", "II", "III", "IV"] },
    { question: "Валентность коперниция в CnCl₂", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность нихония в NhCl₃", answer: "III", options: ["I", "II", "III", "IV"] },
    { question: "Валентность флеровия в FlCl₂", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность московия в McCl₃", answer: "III", options: ["I", "II", "III", "IV"] },
    { question: "Валентность ливермория в LvCl₂", answer: "II", options: ["I", "II", "III", "IV"] },
    { question: "Валентность теннессина в TsCl", answer: "I", options: ["I", "II", "III", "IV"] },
    { question: "Валентность оганесона (предположительно)", answer: "0", options: ["0", "I", "II", "IV"] }
],
        oxidation: [
    { question: "Степень окисления кислорода в H₂O", answer: "-2", options: ["-2", "-1", "0", "+2"] },
    { question: "Степень окисления водорода в HCl", answer: "+1", options: ["-1", "0", "+1", "+2"] },
    { question: "Степень окисления натрия в NaCl", answer: "+1", options: ["-1", "0", "+1", "+2"] },
    { question: "Степень окисления хлора в Cl₂", answer: "0", options: ["-1", "0", "+1", "+2"] },
    { question: "Степень окисления магния в MgO", answer: "+2", options: ["-2", "0", "+1", "+2"] },
    { question: "Степень окисления алюминия в Al₂O₃", answer: "+3", options: ["-3", "0", "+3", "+2"] },
    { question: "Степень окисления серы в H₂S", answer: "-2", options: ["-2", "-1", "0", "+2"] },
    { question: "Степень окисления азота в NH₃", answer: "-3", options: ["-3", "0", "+3", "+5"] },
    { question: "Степень окисления углерода в CH₄", answer: "-4", options: ["-4", "0", "+2", "+4"] },
    { question: "Степень окисления фтора в HF", answer: "-1", options: ["-1", "0", "+1", "+2"] },
    { question: "Степень окисления серы в SO₂", answer: "+4", options: ["-2", "+4", "+6", "0"] },
    { question: "Степень окисления азота в NO", answer: "+2", options: ["-3", "+2", "+5", "0"] },
    { question: "Степень окисления хрома в Cr₂O₃", answer: "+3", options: ["+2", "+3", "+6", "0"] },
    { question: "Степень окисления марганца в MnO₂", answer: "+4", options: ["+2", "+4", "+7", "0"] },
    { question: "Степень окисления железа в Fe₂O₃", answer: "+3", options: ["+2", "+3", "+4", "0"] },
    { question: "Степень окисления углерода в CO₂", answer: "+4", options: ["-4", "+2", "+4", "0"] },
    { question: "Степень окисления меди в CuO", answer: "+2", options: ["+1", "+2", "+3", "0"] },
    { question: "Степень окисления свинца в PbO₂", answer: "+4", options: ["+2", "+4", "+6", "0"] },
    { question: "Степень окисления серы в SO₃", answer: "+6", options: ["+4", "+6", "-2", "0"] },
    { question: "Степень окисления азота в N₂O₅", answer: "+5", options: ["+3", "+5", "-3", "0"] },
    { question: "Степень окисления серы в H₂SO₄", answer: "+6", options: ["+4", "+6", "-2", "0"] },
    { question: "Степень окисления азота в HNO₃", answer: "+5", options: ["+3", "+5", "-3", "0"] },
    { question: "Степень окисления фосфора в H₃PO₄", answer: "+5", options: ["+3", "+5", "-3", "0"] },
    { question: "Степень окисления хлора в HClO₄", answer: "+7", options: ["-1", "+1", "+5", "+7"] },
    { question: "Степень окисления серы в H₂SO₃", answer: "+4", options: ["+4", "+6", "-2", "0"] },
    { question: "Степень окисления хрома в K₂Cr₂O₇", answer: "+6", options: ["+3", "+6", "+2", "0"] },
    { question: "Степень окисления марганца в KMnO₄", answer: "+7", options: ["+2", "+4", "+7", "0"] },
    { question: "Степень окисления железа в Fe(OH)₃", answer: "+3", options: ["+2", "+3", "+4", "0"] },
    { question: "Степень окисления меди в Cu(OH)₂", answer: "+2", options: ["+1", "+2", "+3", "0"] },
    { question: "Степень окисления азота в NH₄OH", answer: "-3", options: ["-3", "+3", "+5", "0"] },
    { question: "Степень окисления серы в Na₂SO₄", answer: "+6", options: ["+4", "+6", "-2", "0"] },
    { question: "Степень окисления азота в NaNO₃", answer: "+5", options: ["+3", "+5", "-3", "0"] },
    { question: "Степень окисления углерода в CaCO₃", answer: "+4", options: ["-4", "+2", "+4", "0"] },
    { question: "Степень окисления хлора в NaClO", answer: "+1", options: ["-1", "+1", "+5", "+7"] },
    { question: "Степень окисления хлора в NaClO₃", answer: "+5", options: ["-1", "+1", "+5", "+7"] },
    { question: "Степень окисления железа в FeSO₄", answer: "+2", options: ["+2", "+3", "+4", "0"] },
    { question: "Степень окисления меди в CuCl₂", answer: "+2", options: ["+1", "+2", "+3", "0"] },
    { question: "Степень окисления алюминия в AlCl₃", answer: "+3", options: ["+1", "+3", "+5", "0"] },
    { question: "Степень окисления серебра в AgNO₃", answer: "+1", options: ["+1", "+2", "+3", "0"] },
    { question: "Степень окисления цинка в ZnSO₄", answer: "+2", options: ["+1", "+2", "+3", "0"] },
    { question: "Степень окисления кислорода в H₂O₂", answer: "-1", options: ["-2", "-1", "0", "+1"] },
    { question: "Степень окисления калия в KO₂", answer: "+1", options: ["+1", "+2", "-1", "0"] },
    { question: "Степень окисления кислорода в Na₂O₂", answer: "-1", options: ["-2", "-1", "0", "+1"] },
    { question: "Степень окисления углерода в C₂H₅OH", answer: "-2", options: ["-4", "-2", "+2", "+4"] },
    { question: "Степень окисления серы в Na₂S₂O₃", answer: "+2", options: ["+2", "+4", "+6", "0"] },
    { question: "Степень окисления железа в Fe₃O₄", answer: "+8/3", options: ["+2", "+3", "+8/3", "0"] },
    { question: "Степень окисления азота в NH₄NO₃ (в NH₄⁺)", answer: "-3", options: ["-3", "+5", "+3", "0"] },
    { question: "Степень окисления азота в NH₄NO₃ (в NO₃⁻)", answer: "+5", options: ["-3", "+5", "+3", "0"] },
    { question: "Степень окисления серы в Na₂S₄O₆", answer: "+2.5", options: ["+2", "+2.5", "+4", "+6"] },
    { question: "Степень окисления углерода в C₆H₁₂O₆", answer: "0", options: ["-4", "0", "+2", "+4"] }
],
        bond: [
    { question: "Какой тип реакции: 2H₂ + O₂ → 2H₂O?", answer: "Соединения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: S + O₂ → SO₂?", answer: "Соединения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: 2Na + Cl₂ → 2NaCl?", answer: "Соединения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: CaO + H₂O → Ca(OH)₂?", answer: "Соединения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: 4Fe + 3O₂ → 2Fe₂O₃?", answer: "Соединения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: 2H₂O → 2H₂ + O₂?", answer: "Разложения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: 2HgO → 2Hg + O₂?", answer: "Разложения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: CaCO₃ → CaO + CO₂?", answer: "Разложения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: 2KClO₃ → 2KCl + 3O₂?", answer: "Разложения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: 2Ag₂O → 4Ag + O₂?", answer: "Разложения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: Zn + 2HCl → ZnCl₂ + H₂?", answer: "Замещения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: Fe + CuSO₄ → FeSO₄ + Cu?", answer: "Замещения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: 2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂?", answer: "Замещения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: Cl₂ + 2NaBr → 2NaCl + Br₂?", answer: "Замещения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: Mg + 2AgNO₃ → Mg(NO₃)₂ + 2Ag?", answer: "Замещения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: HCl + NaOH → NaCl + H₂O?", answer: "Обмена", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: AgNO₃ + NaCl → AgCl↓ + NaNO₃?", answer: "Обмена", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl?", answer: "Обмена", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O?", answer: "Обмена", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑?", answer: "Обмена", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: CH₄ + 2O₂ → CO₂ + 2H₂O?", answer: "Горения", options: ["Горения", "Нейтрализации", "Разложения", "Обмена"] },
    { question: "Какой тип реакции: C + O₂ → CO₂?", answer: "Горения", options: ["Горения", "Нейтрализации", "Разложения", "Обмена"] },
    { question: "Какой тип реакции: HCl + KOH → KCl + H₂O?", answer: "Нейтрализации", options: ["Горения", "Нейтрализации", "Разложения", "Обмена"] },
    { question: "Какой тип реакции: 2H₂ + O₂ → 2H₂O + энергия?", answer: "Экзотермическая", options: ["Экзотермическая", "Эндотермическая", "Каталитическая", "Обратимая"] },
    { question: "Какой тип реакции: N₂ + 3H₂ ⇌ 2NH₃?", answer: "Обратимая", options: ["Экзотермическая", "Эндотермическая", "Каталитическая", "Обратимая"] },
    { question: "Какой тип реакции: 2KClO₃ → 2KCl + 3O₂↑ (с нагреванием)?", answer: "Разложения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: CuO + H₂ → Cu + H₂O?", answer: "Восстановления", options: ["Окисления", "Восстановления", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: 2Fe + 3Cl₂ → 2FeCl₃?", answer: "Соединения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: 2Na + 2H₂O → 2NaOH + H₂↑?", answer: "Замещения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] },
    { question: "Какой тип реакции: CaO + CO₂ → CaCO₃?", answer: "Соединения", options: ["Соединения", "Разложения", "Замещения", "Обмена"] }
],
        atomicmass: [
    { question: "Атомная масса водорода (H)", answer: "1", options: ["1", "2", "3", "4"] },
    { question: "Атомная масса гелия (He)", answer: "4", options: ["2", "3", "4", "5"] },
    { question: "Атомная масса лития (Li)", answer: "7", options: ["6", "7", "8", "9"] },
    { question: "Атомная масса бериллия (Be)", answer: "9", options: ["8", "9", "10", "11"] },
    { question: "Атомная масса бора (B)", answer: "11", options: ["10", "11", "12", "13"] },
    { question: "Атомная масса углерода (C)", answer: "12", options: ["12", "13", "14", "15"] },
    { question: "Атомная масса азота (N)", answer: "14", options: ["13", "14", "15", "16"] },
    { question: "Атомная масса кислорода (O)", answer: "16", options: ["15", "16", "17", "18"] },
    { question: "Атомная масса фтора (F)", answer: "19", options: ["18", "19", "20", "21"] },
    { question: "Атомная масса неона (Ne)", answer: "20", options: ["19", "20", "21", "22"] },

    { question: "Атомная масса натрия (Na)", answer: "23", options: ["22", "23", "24", "25"] },
    { question: "Атомная масса магния (Mg)", answer: "24", options: ["23", "24", "25", "26"] },
    { question: "Атомная масса алюминия (Al)", answer: "27", options: ["26", "27", "28", "29"] },
    { question: "Атомная масса кремния (Si)", answer: "28", options: ["27", "28", "29", "30"] },
    { question: "Атомная масса фосфора (P)", answer: "31", options: ["30", "31", "32", "33"] },
    { question: "Атомная масса серы (S)", answer: "32", options: ["31", "32", "33", "34"] },
    { question: "Атомная масса хлора (Cl)", answer: "35.5", options: ["34", "35", "35.5", "36"] },
    { question: "Атомная масса аргона (Ar)", answer: "40", options: ["38", "39", "40", "41"] },
    { question: "Атомная масса калия (K)", answer: "39", options: ["38", "39", "40", "41"] },
    { question: "Атомная масса кальция (Ca)", answer: "40", options: ["39", "40", "41", "42"] },


    { question: "Атомная масса скандия (Sc)", answer: "45", options: ["44", "45", "46", "47"] },
    { question: "Атомная масса титана (Ti)", answer: "48", options: ["47", "48", "49", "50"] },
    { question: "Атомная масса ванадия (V)", answer: "51", options: ["50", "51", "52", "53"] },
    { question: "Атомная масса хрома (Cr)", answer: "52", options: ["51", "52", "53", "54"] },
    { question: "Атомная масса марганца (Mn)", answer: "55", options: ["54", "55", "56", "57"] },
    { question: "Атомная масса железа (Fe)", answer: "56", options: ["55", "56", "57", "58"] },
    { question: "Атомная масса кобальта (Co)", answer: "59", options: ["58", "59", "60", "61"] },
    { question: "Атомная масса никеля (Ni)", answer: "59", options: ["58", "59", "60", "61"] },
    { question: "Атомная масса меди (Cu)", answer: "63.5", options: ["62", "63", "63.5", "64"] },
    { question: "Атомная масса цинка (Zn)", answer: "65", options: ["64", "65", "66", "67"] },


    { question: "Атомная масса галлия (Ga)", answer: "70", options: ["69", "70", "71", "72"] },
    { question: "Атомная масса германия (Ge)", answer: "73", options: ["72", "73", "74", "75"] },
    { question: "Атомная масса мышьяка (As)", answer: "75", options: ["74", "75", "76", "77"] },
    { question: "Атомная масса селена (Se)", answer: "79", options: ["78", "79", "80", "81"] },
    { question: "Атомная масса брома (Br)", answer: "80", options: ["79", "80", "81", "82"] },
    { question: "Атомная масса криптона (Kr)", answer: "84", options: ["83", "84", "85", "86"] },
    { question: "Атомная масса рубидия (Rb)", answer: "85.5", options: ["84", "85", "85.5", "86"] },
    { question: "Атомная масса стронция (Sr)", answer: "88", options: ["87", "88", "89", "90"] },
    { question: "Атомная масса иттрия (Y)", answer: "89", options: ["88", "89", "90", "91"] },
    { question: "Атомная масса циркония (Zr)", answer: "91", options: ["90", "91", "92", "93"] },


    { question: "Атомная масса ниобия (Nb)", answer: "93", options: ["92", "93", "94", "95"] },
    { question: "Атомная масса молибдена (Mo)", answer: "96", options: ["95", "96", "97", "98"] },
    { question: "Атомная масса технеция (Tc)", answer: "98", options: ["97", "98", "99", "100"] },
    { question: "Атомная масса рутения (Ru)", answer: "101", options: ["100", "101", "102", "103"] },
    { question: "Атомная масса родия (Rh)", answer: "103", options: ["102", "103", "104", "105"] },
    { question: "Атомная масса палладия (Pd)", answer: "106", options: ["105", "106", "107", "108"] },
    { question: "Атомная масса серебра (Ag)", answer: "108", options: ["107", "108", "109", "110"] },
    { question: "Атомная масса кадмия (Cd)", answer: "112", options: ["111", "112", "113", "114"] },
    { question: "Атомная масса индия (In)", answer: "115", options: ["114", "115", "116", "117"] },
    { question: "Атомная масса олова (Sn)", answer: "119", options: ["118", "119", "120", "121"] },


    { question: "Атомная масса сурьмы (Sb)", answer: "122", options: ["121", "122", "123", "124"] },
    { question: "Атомная масса теллура (Te)", answer: "128", options: ["127", "128", "129", "130"] },
    { question: "Атомная масса йода (I)", answer: "127", options: ["126", "127", "128", "129"] },
    { question: "Атомная масса ксенона (Xe)", answer: "131", options: ["130", "131", "132", "133"] },
    { question: "Атомная масса цезия (Cs)", answer: "133", options: ["132", "133", "134", "135"] },
    { question: "Атомная масса бария (Ba)", answer: "137", options: ["136", "137", "138", "139"] },
    { question: "Атомная масса лантана (La)", answer: "139", options: ["138", "139", "140", "141"] },
    { question: "Атомная масса церия (Ce)", answer: "140", options: ["139", "140", "141", "142"] },
    { question: "Атомная масса празеодима (Pr)", answer: "141", options: ["140", "141", "142", "143"] },
    { question: "Атомная масса неодима (Nd)", answer: "144", options: ["143", "144", "145", "146"] },

    { question: "Атомная масса прометия (Pm)", answer: "145", options: ["144", "145", "146", "147"] },
    { question: "Атомная масса самария (Sm)", answer: "150", options: ["149", "150", "151", "152"] },
    { question: "Атомная масса европия (Eu)", answer: "152", options: ["151", "152", "153", "154"] },
    { question: "Атомная масса гадолиния (Gd)", answer: "157", options: ["156", "157", "158", "159"] },
    { question: "Атомная масса тербия (Tb)", answer: "159", options: ["158", "159", "160", "161"] },
    { question: "Атомная масса диспрозия (Dy)", answer: "163", options: ["162", "163", "164", "165"] },
    { question: "Атомная масса гольмия (Ho)", answer: "165", options: ["164", "165", "166", "167"] },
    { question: "Атомная масса эрбия (Er)", answer: "167", options: ["166", "167", "168", "169"] },
    { question: "Атомная масса тулия (Tm)", answer: "169", options: ["168", "169", "170", "171"] },
    { question: "Атомная масса иттербия (Yb)", answer: "173", options: ["172", "173", "174", "175"] },

    { question: "Атомная масса лютеция (Lu)", answer: "175", options: ["174", "175", "176", "177"] },
    { question: "Атомная масса гафния (Hf)", answer: "178", options: ["177", "178", "179", "180"] },
    { question: "Атомная масса тантала (Ta)", answer: "181", options: ["180", "181", "182", "183"] },
    { question: "Атомная масса вольфрама (W)", answer: "184", options: ["183", "184", "185", "186"] },
    { question: "Атомная масса рения (Re)", answer: "186", options: ["185", "186", "187", "188"] },
    { question: "Атомная масса осмия (Os)", answer: "190", options: ["189", "190", "191", "192"] },
    { question: "Атомная масса иридия (Ir)", answer: "192", options: ["191", "192", "193", "194"] },
    { question: "Атомная масса платины (Pt)", answer: "195", options: ["194", "195", "196", "197"] },
    { question: "Атомная масса золота (Au)", answer: "197", options: ["196", "197", "198", "199"] },
    { question: "Атомная масса ртути (Hg)", answer: "201", options: ["200", "201", "202", "203"] },

    { question: "Атомная масса таллия (Tl)", answer: "204", options: ["203", "204", "205", "206"] },
    { question: "Атомная масса свинца (Pb)", answer: "207", options: ["206", "207", "208", "209"] },
    { question: "Атомная масса висмута (Bi)", answer: "209", options: ["208", "209", "210", "211"] },
    { question: "Атомная масса полония (Po)", answer: "209", options: ["208", "209", "210", "211"] },
    { question: "Атомная масса астата (At)", answer: "210", options: ["209", "210", "211", "212"] },
    { question: "Атомная масса радона (Rn)", answer: "222", options: ["220", "221", "222", "223"] },
    { question: "Атомная масса франция (Fr)", answer: "223", options: ["222", "223", "224", "225"] },
    { question: "Атомная масса радия (Ra)", answer: "226", options: ["225", "226", "227", "228"] },
    { question: "Атомная масса актиния (Ac)", answer: "227", options: ["226", "227", "228", "229"] },
    { question: "Атомная масса тория (Th)", answer: "232", options: ["231", "232", "233", "234"] },

    { question: "Атомная масса протактиния (Pa)", answer: "231", options: ["230", "231", "232", "233"] },
    { question: "Атомная масса урана (U)", answer: "238", options: ["237", "238", "239", "240"] },
    { question: "Атомная масса нептуния (Np)", answer: "237", options: ["236", "237", "238", "239"] },
    { question: "Атомная масса плутония (Pu)", answer: "244", options: ["243", "244", "245", "246"] },
    { question: "Атомная масса америция (Am)", answer: "243", options: ["242", "243", "244", "245"] },
    { question: "Атомная масса кюрия (Cm)", answer: "247", options: ["246", "247", "248", "249"] },
    { question: "Атомная масса берклия (Bk)", answer: "247", options: ["246", "247", "248", "249"] },
    { question: "Атомная масса калифорния (Cf)", answer: "251", options: ["250", "251", "252", "253"] },
    { question: "Атомная масса эйнштейния (Es)", answer: "252", options: ["251", "252", "253", "254"] },
    { question: "Атомная масса фермия (Fm)", answer: "257", options: ["256", "257", "258", "259"] }
],
        OVR: [
    {
        question: "Какой из этих элементов является сильным окислителем?",
        answer: "F₂",
        options: ["Na", "F₂", "H₂", "Ca"]
    },
    {
        question: "Какой из этих элементов является типичным восстановителем?",
        answer: "Na",
        options: ["Cl₂", "O₂", "Na", "F₂"]
    },
    {
        question: "Какое вещество в реакции выступает окислителем: 2Na + Cl₂ → 2NaCl?",
        answer: "Cl₂",
        options: ["Na", "Cl₂", "Оба", "Никакое"]
    },
    {
        question: "Какое вещество в реакции выступает восстановителем: Zn + CuSO₄ → ZnSO₄ + Cu?",
        answer: "Zn",
        options: ["Zn", "CuSO₄", "Оба", "Никакое"]
    },
    {
        question: "Какой ион является окислителем в реакции: Fe²⁺ → Fe³⁺ + e⁻?",
        answer: "Fe³⁺",
        options: ["Fe²⁺", "Fe³⁺", "Оба", "Никакой"]
    },

    // 21-40: Окислительно-восстановительные реакции
    {
        question: "Что является окислителем в реакции горения метана: CH₄ + 2O₂ → CO₂ + 2H₂O?",
        answer: "O₂",
        options: ["CH₄", "O₂", "CO₂", "H₂O"]
    },
    {
        question: "Что является восстановителем в реакции: 2H₂S + SO₂ → 3S + 2H₂O?",
        answer: "H₂S",
        options: ["H₂S", "SO₂", "Оба", "Никакое"]
    },
    {
        question: "Какой процесс происходит с азотом в реакции: NH₃ → NO?",
        answer: "Окисление",
        options: ["Окисление", "Восстановление", "Ни то, ни другое", "Диспропорционирование"]
    },
    {
        question: "Как изменяется степень окисления марганца в реакции: KMnO₄ → Mn²⁺?",
        answer: "Уменьшается",
        options: ["Увеличивается", "Уменьшается", "Не изменяется", "Сначала увеличивается, потом уменьшается"]
    },
    {
        question: "Какое вещество может быть только окислителем?",
        answer: "F₂",
        options: ["H₂", "F₂", "Fe²⁺", "SO₂"]
    },

    // 41-60: Соединения-окислители
    {
        question: "Какое из этих соединений - сильный окислитель?",
        answer: "KMnO₄",
        options: ["NaCl", "KMnO₄", "H₂O", "CO₂"]
    },
    {
        question: "Какой окислитель используется в органическом синтезе для мягкого окисления?",
        answer: "K₂Cr₂O₇",
        options: ["O₃", "K₂Cr₂O₇", "HNO₃", "Cl₂"]
    },
    {
        question: "Какое вещество является окислителем в реакции: 2KMnO₄ + 5H₂SO₃ → 2MnSO₄ + K₂SO₄ + 3H₂SO₄ + 2H₂O?",
        answer: "KMnO₄",
        options: ["KMnO₄", "H₂SO₃", "Оба", "Никакое"]
    },
    {
        question: "Какой процесс происходит с серой в реакции: H₂SO₃ → H₂SO₄?",
        answer: "Окисление",
        options: ["Окисление", "Восстановление", "Ни то, ни другое", "Диcпропорционирование"]
    },
    {
        question: "Какое вещество может быть как окислителем, так и восстановителем?",
        answer: "H₂O₂",
        options: ["H₂O₂", "KMnO₄", "F₂", "Na"]
    },

    // 61-80: Восстановители
    {
        question: "Какое из этих веществ - типичный восстановитель?",
        answer: "H₂",
        options: ["O₂", "H₂", "Cl₂", "F₂"]
    },
    {
        question: "Какой металл - самый сильный восстановитель?",
        answer: "Li",
        options: ["Li", "Au", "Fe", "Cu"]
    },
    {
        question: "Какое вещество является восстановителем в реакции: Sn²⁺ → Sn⁴⁺ + 2e⁻?",
        answer: "Sn²⁺",
        options: ["Sn²⁺", "Sn⁴⁺", "Оба", "Никакое"]
    },
    {
        question: "Какой процесс происходит с железом в реакции: Fe²⁺ → Fe³⁺ + e⁻?",
        answer: "Окисление",
        options: ["Окисление", "Восстановление", "Ни то, ни другое", "Диcпропорционирование"]
    },
    {
        question: "Какое вещество может быть только восстановителем?",
        answer: "Na",
        options: ["Na", "O₂", "H₂O₂", "SO₂"]
    },

    // 81-100: Сложные случаи
    {
        question: "Какое вещество в реакции диспропорционирования является и окислителем, и восстановителем?",
        answer: "Cl₂",
        options: ["Cl₂", "NaCl", "HCl", "O₂"]
    },
    {
        question: "Какой процесс происходит с пероксидом водорода в реакции: 2H₂O₂ → 2H₂O + O₂?",
        answer: "Диспропорционирование",
        options: ["Окисление", "Восстановление", "Диспропорционирование", "Ничего"]
    },
    {
        question: "Какое вещество является окислителем в реакции: CuO + H₂ → Cu + H₂O?",
        answer: "CuO",
        options: ["CuO", "H₂", "Оба", "Никакое"]
    },
    {
        question: "Как изменяется степень окисления хрома в реакции: K₂Cr₂O₇ → Cr³⁺?",
        answer: "Уменьшается",
        options: ["Увеличивается", "Уменьшается", "Не изменяется", "Сначала увеличивается, потом уменьшается"]
    },
    {
        question: "Какое вещество может выступать как окислителем, так и восстановителем?",
        answer: "SO₂",
        options: ["SO₂", "Na", "F₂", "KMnO₄"]
    },

    {
        question: "Что является восстановителем в реакции: 2FeCl₃ + H₂S → 2FeCl₂ + S + 2HCl?",
        answer: "H₂S",
        options: ["FeCl₃", "H₂S", "Оба", "Никакое"]
    },
    {
        question: "Какой процесс происходит с йодом в реакции: I₂ → 2I⁻?",
        answer: "Восстановление",
        options: ["Окисление", "Восстановление", "Ни то, ни другое", "Диcпропорционирование"]
    },
    {
        question: "Какое вещество является окислителем в реакции: 2KBr + Cl₂ → 2KCl + Br₂?",
        answer: "Cl₂",
        options: ["KBr", "Cl₂", "Оба", "Никакое"]
    },
    {
        question: "Как изменяется степень окисления серы в реакции: H₂SO₄ → SO₂?",
        answer: "Уменьшается",
        options: ["Увеличивается", "Уменьшается", "Не изменяется", "Сначала увеличивается, потом уменьшается"]
    },
    {
        question: "Какое вещество может быть только окислителем?",
        answer: "O₃",
        options: ["H₂", "O₃", "H₂O₂", "SO₂"]
    },

]
};


    const startButton = document.getElementById('startButton');
    const themeSelect = document.getElementById('themeSelect');
    const timerDiv = document.getElementById('timerDiv');
    const timeElement = document.getElementById('time');
    const gameScreen = document.getElementById('gameScreen');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const answerButton = document.getElementById('answerButton');
    const currentQuestionNum = document.getElementById('currentQuestionNum');
    const totalQuestions = document.getElementById('totalQuestions');
    const resultText = document.getElementById('resultText');
    const restartButton = document.getElementById('restartButton');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const resultsScreen = document.getElementById('resultsScreen');
    const tabButtons = document.querySelectorAll('.tab-button');


    let currentMode = 'time';
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = 60;
    let selectedOption = null;
    let totalQuestionsCount = 20;


    document.addEventListener('DOMContentLoaded', () => {
        startButton.addEventListener('click', startGame);
        restartButton.addEventListener('click', restartGame);
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentMode = button.dataset.mode;
            });
        });
    });

    function startGame() {
        const theme = themeSelect.value;
        currentQuestions = [...quizData[theme]];
        shuffleArray(currentQuestions);
        totalQuestionsCount = currentMode === 'count' ? 20 : currentQuestions.length;
        totalQuestions.textContent = totalQuestionsCount;
        currentQuestionIndex = 0;
        score = 0;
        timeLeft = 60;
        selectedOption = null;
        welcomeScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        resultsScreen.classList.add('hidden');
        if (currentMode === 'time') {
            timerDiv.classList.remove('hidden');
            updateTimer();
            clearInterval(timer);
            timer = setInterval(updateTimer, 1000);
        } else {
            timerDiv.classList.add('hidden');
        }
        showQuestion();
    }

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            endGame();
        }
    }

    function showQuestion() {
        if (currentQuestionIndex >= totalQuestionsCount || currentQuestionIndex >= currentQuestions.length) {
            endGame();
            return;
        }

        const currentQuestion = currentQuestions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        currentQuestionNum.textContent = currentQuestionIndex + 1;

        optionsContainer.innerHTML = '';

        currentQuestion.options.forEach((option, index) => {
            const radioDiv = document.createElement('label');
            radioDiv.className = 'radio';

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'answer';
            input.value = option;

            input.addEventListener('change', () => {
                selectedOption = option;
                answerButton.disabled = false;

                document.querySelectorAll('.radio').forEach(el => {
                    el.classList.remove('selected');
                });

                radioDiv.classList.add('selected');
            });

            radioDiv.appendChild(input);
            radioDiv.appendChild(document.createTextNode(option));
            optionsContainer.appendChild(radioDiv);
        });

        selectedOption = null;
        answerButton.disabled = true;
    }

    answerButton.addEventListener('click', () => {
        if (selectedOption === null) return;

        const currentQuestion = currentQuestions[currentQuestionIndex];
        const isCorrect = selectedOption === currentQuestion.answer;

        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.disabled = true;
        });

        document.querySelectorAll('.radio').forEach(el => {
            const radioText = el.textContent.trim();

            if (radioText === currentQuestion.answer) {
                el.classList.add('correct');
            }
            else if (el.classList.contains('selected')) {
                el.classList.add('incorrect');
            }
        });

        if (isCorrect) {
            score++;
        }

        answerButton.disabled = true;
        setTimeout(() => {
            currentQuestionIndex++;
            showQuestion();
        }, 1000);
    });

    function endGame() {
        clearInterval(timer);
        gameScreen.classList.add('hidden');
        resultsScreen.classList.remove('hidden');

        if (currentMode === 'time') {
            resultText.textContent = `Вы ответили правильно на ${score} вопроса(-ов) за 1 минуту!`;
        } else {
            resultText.textContent = `Вы ответили правильно на ${score} вопроса(-ов)!`;
        }
    }

    function restartGame() {
        resultsScreen.classList.add('hidden');
        welcomeScreen.classList.remove('hidden');
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }