const DATASET = [&#39;Aayla Secura&#39;, &#39;Adi Gallia&#39;, &#39;Admiral Dodd Rancit&#39;,
    &#39;Admiral Firmus Piett&#39;, &#39;Admiral Gial Ackbar&#39;, &#39;Admiral Ozzel&#39;,
    &#39;Admiral Raddus&#39;, &#39;Admiral Terrinald Screed&#39;, &#39;Admiral Trench&#39;,
    &#39;Admiral U.O. Statura&#39;, &#39;Agen Kolar&#39;, &#39;Agent Kallus&#39;, &#39;Aiolin and
    Morit Astarte&#39;, &#39;Aks Moe&#39;, &#39;Almec&#39;, &#39;Alton Kastle&#39;, &#39;Amee&#39;, &#39;AP-5&#39;,
    &#39;Armitage Hux&#39;, &#39;Artoo&#39;, &#39;Arvel Crynyd&#39;, &#39;Asajj Ventress&#39;, &#39;Aurra
    Sing&#39;, &#39;AZI-3&#39;, &#39;Bala-Tik&#39;, &#39;Barada&#39;, &#39;Bargwill Tomder&#39;, &#39;Baron
    Papanoida&#39;, &#39;Barriss Offee&#39;, &#39;Baze Malbus&#39;, &#39;Bazine Netal&#39;, &#39;BB-8&#39;,
    &#39;BB-9E&#39;, &#39;Ben Quadinaros&#39;, &#39;Berch Teller&#39;, &#39;Beru Lars&#39;, &#39;Bib Fortuna&#39;,
    &#39;Biggs Darklighter&#39;, &#39;Black Krrsantan&#39;, &#39;Bo-Katan Kryze&#39;, &#39;Boba Fett&#39;,
    &#39;Bobbajo&#39;, &#39;Bodhi Rook&#39;, &#39;Borvo the Hutt&#39;, &#39;Boss Nass&#39;, &#39;Bossk&#39;,
    &#39;Breha Antilles-Organa&#39;, &#39;Bren Derlin&#39;, &#39;Brendol Hux&#39;, &#39;BT-1&#39;, &#39;C-
    3PO&#39;, &#39;C1-10P&#39;, &#39;Cad Bane&#39;, &#39;Caluan Ematt&#39;, &#39;Captain Gregor&#39;, &#39;Captain
    Phasma&#39;, &#39;Captain Quarsh Panaka&#39;, &#39;Captain Rex&#39;, &#39;Carlist Rieekan&#39;,
    &#39;Casca Panzoro&#39;, &#39;Cassian Andor&#39;, &#39;Cassio Tagge&#39;, &#39;Cham Syndulla&#39;,
    &#39;Che Amanwe Papanoida&#39;, &#39;Chewbacca&#39;, &#39;Chi Eekway Papanoida&#39;, &#39;Chief
    Chirpa&#39;, &#39;Chirrut Îmwe&#39;, &#39;Ciena Ree&#39;, &#39;Cin Drallig&#39;, &#39;Clegg Holdfast&#39;,
    &#39;Cliegg Lars&#39;, &#39;Coleman Kcaj&#39;, &#39;Coleman Trebor&#39;, &#39;Colonel Kaplan&#39;,
    &#39;Commander Bly&#39;, &#39;Commander Cody (CC-2224)&#39;, &#39;Commander Fil (CC-
    3714)&#39;, &#39;Commander Fox&#39;, &#39;Commander Gree&#39;, &#39;Commander Jet&#39;, &#39;Commander
    Wolffe&#39;, &#39;Conan Antonio Motti&#39;, &#39;Conder Kyl&#39;, &#39;Constable Zuvio&#39;,
    &#39;Cordé&#39;, &#39;Cpatain Typho&#39;, &#39;Crix Madine&#39;, &#39;Cut Lawquane&#39;, &#39;Dak Ralter&#39;,
    &#39;Dapp&#39;, &#39;Darth Bane&#39;, &#39;Darth Maul&#39;, &#39;Darth Tyranus&#39;, &#39;Daultay Dofine&#39;,
    &#39;Del Meeko&#39;, &#39;Delian Mors&#39;, &#39;Dengar&#39;, &#39;Depa Billaba&#39;, &#39;Derek Klivian&#39;,
    &#39;Dexter Jettster&#39;, &#39;Dineé Ellberger&#39;, &#39;DJ&#39;, &#39;Doctor Aphra&#39;, &#39;Doctor
    Evazan&#39;, &#39;Dogma&#39;, &#39;Dormé&#39;, &#39;Dr. Cylo&#39;, &#39;Droidbait&#39;, &#39;Droopy McCool&#39;,
    &#39;Dryden Vos&#39;, &#39;Dud Bolt&#39;, &#39;Ebe E. Endocott&#39;, &#39;Echuu Shen-Jon&#39;, &#39;Eeth
    Koth&#39;, &#39;Eighth Brother&#39;, &#39;Eirtaé&#39;, &#39;Eli Vanto&#39;, &#39;Ellé&#39;, &#39;Ello Asty&#39;,
    &#39;Embo&#39;, &#39;Eneb Ray&#39;, &#39;Enfys Nest&#39;, &#39;EV-9D9&#39;, &#39;Evaan Verlaine&#39;, &#39;Even
    Piell&#39;, &#39;Ezra Bridger&#39;, &#39;Faro Argyus&#39;, &#39;Feral&#39;, &#39;Fifth Brother&#39;,
    &#39;Finis Valorum&#39;, &#39;Finn&#39;, &#39;Fives&#39;, &#39;FN-1824&#39;, &#39;FN-2003&#39;, &#39;Fodesinbeed
    
    ©
    Annodue&#39;, &#39;Fulcrum&#39;, &#39;FX-7&#39;, &#39;GA-97&#39;, &#39;Galen Erso&#39;, &#39;Gallius Rax&#39;,
    &#39;Garazeb &quot;Zeb&quot; Orrelios&#39;, &#39;Gardulla the Hutt&#39;, &#39;Garrick Versio&#39;,
    &#39;Garven Dreis&#39;, &#39;Gavyn Sykes&#39;, &#39;Gideon Hask&#39;, &#39;Gizor Dellso&#39;, &#39;Gonk
    droid&#39;, &#39;Grand Inquisitor&#39;, &#39;Greeata Jendowanian&#39;, &#39;Greedo&#39;, &#39;Greer
    Sonnel&#39;, &#39;Grievous&#39;, &#39;Grummgar&#39;, &#39;Gungi&#39;, &#39;Hammerhead&#39;, &#39;Han Solo&#39;,
    &#39;Harter Kalonia&#39;, &#39;Has Obbit&#39;, &#39;Hera Syndulla&#39;, &#39;Hevy&#39;, &#39;Hondo
    Ohnaka&#39;, &#39;Huyang&#39;, &#39;Iden Versio&#39;, &#39;IG-88&#39;, &#39;Ima-Gun Di&#39;,
    &#39;Inquisitors&#39;, &#39;Inspector Thanoth&#39;, &#39;Jabba&#39;, &#39;Jacen Syndulla&#39;, &#39;Jan
    Dodonna&#39;, &#39;Jango Fett&#39;, &#39;Janus Greejatus&#39;, &#39;Jar Jar Binks&#39;, &#39;Jas
    Emari&#39;, &#39;Jaxxon&#39;, &#39;Jek Tono Porkins&#39;, &#39;Jeremoch Colton&#39;, &#39;Jira&#39;,
    &#39;Jobal Naberrie&#39;, &#39;Jocasta Nu&#39;, &#39;Joclad Danva&#39;, &#39;Joh Yowza&#39;, &#39;Jom
    Barell&#39;, &#39;Joph Seastriker&#39;, &#39;Jova Tarkin&#39;, &#39;Jubnuk&#39;, &#39;Jyn Erso&#39;, &#39;K-
    2SO&#39;, &#39;Kanan Jarrus&#39;, &#39;Karbin&#39;, &#39;Karina the Great&#39;, &#39;Kes Dameron&#39;,
    &#39;Ketsu Onyo&#39;, &#39;Ki-Adi-Mundi&#39;, &#39;King Katuunko&#39;, &#39;Kit Fisto&#39;, &#39;Kitster
    Banai&#39;, &#39;Klaatu&#39;, &#39;Klik-Klak&#39;, &#39;Korr Sella&#39;, &#39;Kylo Ren&#39;, &#39;L3-37&#39;,
    &#39;Lama Su&#39;, &#39;Lando Calrissian&#39;, &#39;Lanever Villecham&#39;, &#39;Leia Organa&#39;,
    &#39;Letta Turmond&#39;, &#39;Lieutenant Kaydel Ko Connix&#39;, &#39;Lieutenant Thire&#39;,
    &#39;Lobot&#39;, &#39;Logray&#39;, &#39;Lok Durd&#39;, &#39;Longo Two-Guns&#39;, &#39;Lor San Tekka&#39;,
    &#39;Lorth Needa&#39;, &#39;Lott Dod&#39;, &#39;Luke Skywalker&#39;, &#39;Lumat&#39;, &#39;Luminara
    Unduli&#39;, &#39;Lux Bonteri&#39;, &#39;Lyn Me&#39;, &#39;Lyra Erso&#39;, &#39;Mace Windu&#39;,
    &#39;Malakili&#39;, &#39;Mama the Hutt&#39;, &#39;Mars Guo&#39;, &#39;Mas Amedda&#39;, &#39;Mawhonic&#39;,
    &#39;Max Rebo&#39;, &#39;Maximilian Veers&#39;, &#39;Maz Kanata&#39;, &#39;ME-8D9&#39;, &#39;Meena Tills&#39;,
    &#39;Mercurial Swift&#39;, &#39;Mina Bonteri&#39;, &#39;Miraj Scintel&#39;, &#39;Mister Bones&#39;,
    &#39;Mod Terrik&#39;, &#39;Moden Canady&#39;, &#39;Mon Mothma&#39;, &#39;Moradmin Bast&#39;, &#39;Moralo
    Eval&#39;, &#39;Morley&#39;, &#39;Mother Talzin&#39;, &#39;Nahdar Vebb&#39;, &#39;Nahdonnis Praji&#39;,
    &#39;Nien Nunb&#39;, &#39;Niima the Hutt&#39;, &#39;Nines&#39;, &#39;Norra Wexley&#39;, &#39;Nute Gunray&#39;,
    &#39;Nuvo Vindi&#39;, &#39;Obi-Wan Kenobi&#39;, &#39;Odd Ball&#39;, &#39;Ody Mandrell&#39;, &#39;Omi&#39;,
    &#39;Onaconda Farr&#39;, &#39;Oola&#39;, &#39;OOM-9&#39;, &#39;Oppo Rancisis&#39;, &#39;Orn Free Taa&#39;,
    &#39;Oro Dassyne&#39;, &#39;Orrimarko&#39;, &#39;Osi Sobeck&#39;, &#39;Owen Lars&#39;, &#39;Pablo-Jill&#39;,
    &#39;Padmé Amidala&#39;, &#39;Pagetti Rook&#39;, &#39;Paige Tico&#39;, &#39;Paploo&#39;, &#39;Petty
    Officer Thanisson&#39;, &#39;Pharl McQuarrie&#39;, &#39;Plo Koon&#39;, &#39;Po Nudo&#39;, &#39;Poe
    Dameron&#39;, &#39;Poggle the Lesser&#39;, &#39;Pong Krell&#39;, &#39;Pooja Naberrie&#39;, &#39;PZ-
    4CO&#39;, &#39;Quarrie&#39;, &#39;Quay Tolsite&#39;, &#39;Queen Apailana&#39;, &#39;Queen Jamillia&#39;,
    &#39;Queen Neeyutnee&#39;, &#39;Qui-Gon Jinn&#39;, &#39;Quiggold&#39;, &#39;Quinlan Vos&#39;, &#39;R2-D2&#39;,
    &#39;R2-KT&#39;, &#39;R3-S6&#39;, &#39;R4-P17&#39;, &#39;R5-D4&#39;, &#39;RA-7&#39;, &#39;Rabé&#39;, &#39;Rako Hardeen&#39;,
    &#39;Ransolm Casterfo&#39;, &#39;Rappertunie&#39;, &#39;Ratts Tyerell&#39;, &#39;Raymus Antilles&#39;,
    &#39;Ree-Yees&#39;, &#39;Reeve Panzoro&#39;, &#39;Rey&#39;, &#39;Ric Olié&#39;, &#39;Riff Tamson&#39;,
    &#39;Riley&#39;, &#39;Rinnriyin Di&#39;, &#39;Rio Durant&#39;, &#39;Rogue Squadron&#39;, &#39;Romba&#39;,
    &#39;Roos Tarpals&#39;, &#39;Rose Tico&#39;, &#39;Rotta the Hutt&#39;, &#39;Rukh&#39;, &#39;Rune Haako&#39;,
    &#39;Rush Clovis&#39;, &#39;Ruwee Naberrie&#39;, &#39;Ryoo Naberrie&#39;, &#39;Sabé&#39;, &#39;Sabine
    Wren&#39;, &#39;Saché&#39;, &#39;Saelt-Marae&#39;, &#39;Saesee Tiin&#39;, &#39;Salacious B. Crumb&#39;,
    &#39;San Hill&#39;, &#39;Sana Starros&#39;, &#39;Sarco Plank&#39;, &#39;Sarkli&#39;, &#39;Satine Kryze&#39;,
    &#39;Savage Opress&#39;, &#39;Sebulba&#39;, &#39;Senator Organa&#39;, &#39;Sergeant Kreel&#39;,
    &#39;Seventh Sister&#39;, &#39;Shaak Ti&#39;, &#39;Shara Bey&#39;, &#39;Shmi Skywalker&#39;, &#39;Shu
    Mai&#39;, &#39;Sidon Ithano&#39;, &#39;Sifo-Dyas&#39;, &#39;Sim Aloo&#39;, &#39;Siniir Rath Velus&#39;,
    
    ©
    &#39;Sio Bibble&#39;, &#39;Sixth Brother&#39;, &#39;Slowen Lo&#39;, &#39;Sly Moore&#39;,
    &#39;Snaggletooth&#39;, &#39;Snap Wexley&#39;, &#39;Snoke&#39;, &#39;Sola Naberrie&#39;, &#39;Sora Bulq&#39;,
    &#39;Strono Tuggs&#39;, &#39;Sy Snootles&#39;, &#39;Tallissan Lintra&#39;, &#39;Tarfful&#39;, &#39;Tasu
    Leech&#39;, &#39;Taun We&#39;, &#39;TC-14&#39;, &#39;Tee Watt Kaa&#39;, &#39;Teebo&#39;, &#39;Teedo&#39;, &#39;Teemto
    Pagalies&#39;, &#39;Temiri Blagg&#39;, &#39;Tessek&#39;, &#39;Tey How&#39;, &#39;Thane Kyrell&#39;, &#39;The
    Bendu&#39;, &#39;The Smuggler&#39;, &#39;Thrawn&#39;, &#39;Tiaan Jerjerrod&#39;, &#39;Tion Medon&#39;,
    &#39;Tobias Beckett&#39;, &#39;Tulon Voidgazer&#39;, &#39;Tup&#39;, &#39;U9-C4&#39;, &#39;Unkar Plutt&#39;,
    &#39;Val Beckett&#39;, &#39;Vanden Willard&#39;, &#39;Vice Admiral Amilyn Holdo&#39;, &#39;Vober
    Dand&#39;, &#39;WAC-47&#39;, &#39;Wag Too&#39;, &#39;Wald&#39;, &#39;Walrus Man&#39;, &#39;Warok&#39;, &#39;Wat
    Tambor&#39;, &#39;Watto&#39;, &#39;Wedge Antilles&#39;, &#39;Wes Janson&#39;, &#39;Wicket W. Warrick&#39;,
    &#39;Wilhuff Tarkin&#39;, &#39;Wollivan&#39;, &#39;Wuher&#39;, &#39;Wullf Yularen&#39;, &#39;Xamuel
    Lennox&#39;, &#39;Yaddle&#39;, &#39;Yarael Poof&#39;, &#39;Yoda&#39;, &#39;Zam Wesell&#39;, &#39;Zev Senesca&#39;,
    &#39;Ziro the Hutt&#39;, &#39;Zuckuss&#39; ];