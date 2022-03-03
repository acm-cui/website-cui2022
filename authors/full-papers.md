---
label: Full Papers
description: "The Full Papers track at !!conference.short_name!! !!conference.year!! is for original contributions from a broad range of disciplines including: human-computer interaction, computer science, engineering, speech technology, linguistics, psychology, cognitive sciences, sociology and other cognate disciplines."

cta:
  text: Submissions closed
  title: Submissions for the full papers track have now closed
#  link: /2022/authors/submission/
  
track:
  chairs: full_papers
  dates: full_papers

menus:
  authors:
    title: Full Papers
    alt: Information about submitting to the Full Papers track at !!conference.short_name!! !!conference.year!!
    weight: 0
---

# Full Papers

We invite the submission of full research papers, describing original work that has not been previously published, not accepted for publication elsewhere, and not simultaneously submitted or currently under review in another journal or conference (including the other tracks of {{ site.conference.short_name }} {{ site.conference.year }}).

We particularly encourage the submission of high quality replication studies in addition to well-designed studies with null results. 

Full papers are original contributions from a broad range of disciplines including: human-computer interaction, computer science, engineering, speech technology, linguistics, psychology, cognitive sciences, sociology and other cognate disciplines. 

<div class="row">
	<div class="col-xl-8 col-lg-7 col-md-6 col-12">
		<h2>Submission</h2>
		<p>
      Submissions of full research papers must be in English, in PDF format, anonymized, and approximately 6,000 words (including figures, tables, proofs, appendixes, and any other content excluding references and acknowledgments). Suitable LaTeX, Word, and <a href="https://www.overleaf.com/gallery/tagged/acm-official" title="ACM authoring templates on Overleaf">Overleaf templates</a> are available from the <a href="https://www.acm.org/publications/proceedings-template" title="ACM authoring templates">ACM Website</a> (Word users should use “Submission Template”, LaTeX users should use the “manuscript” document class in the Master Article Template). ACM’s CCS concepts and keywords are not required for review but may be required if accepted and published by the ACM.
		</p>

		<p>
      For LaTeX, the following should be used:<br>
      <code>\documentclass[manuscript, review, anonymous]{acmart}</code>
		</p>

		<p>
      Each paper will be peer reviewed by three expert reviewers. Submissions must be made through the <a href="{{ "/authors/submission/" | relative_url }}" title="Go to the {{ site.conference.short_name }} {{ site.conference.year }} submission system">submission system</a>. Accepted papers will be available online and given an oral presentation slot at the conference. At least one author of each accepted paper must register for the conference.
		</p>

		<h2>Review process for {{ site.conference.year }}</h2>
    <p>
      For 2022 the review process will be slightly modified, transitioning away from a submit-review-rebut process. Instead, a shepherding process is introduced that implements a “light revise & resubmit”. With this, we expect to further increase the quality of the {{ site.conference.short_name }} proceedings, while at the same time reducing the burden on both authors and reviewers. Papers for which there is a very high agreement among reviewers regarding recommendation for inclusion in the proceedings will receive early acceptance decisions and will no longer be required to submit a rebuttal (this is the equivalent of “conditionally accepted”). A small number of papers that may require further revisions will be shepherded (equivalent to major revisions or light revise & resubmit), with 3 weeks allocated for authors to coordinate the revisions with the associated chair (AC) coordinating each paper. This may include targeted revisions to specific parts of the original submission addressing the most significant points raised by the reviewers, or alternative forms as deemed appropriate by the AC (such as a detailed proposal of how such revisions may be carried out – details that the previous rebuttal would not have had the space for).
    </p> 
    
    <!--
		<p>
			Accepted Full Papers will be archived in the <a href="http://dl.acm.org/" title="The ACM Digital Library">ACM Digital Library</a> and authors will be given an oral presentation slot at the conference and invited to take part in a panel discussion. At least one author of each accepted paper must register for the conference.
		</p>
    -->

		<h2>Any questions?</h2>
		<p>
			Please contact the <a href="{{ site.data.oc['tracks']['roles'][page.track.chairs]['email'] }}" title="Contact the {{ site.conference.short_name }} {{ site.conference.year }} {{ site.data.oc['tracks']['roles'][page.track.chairs]['label'] }} if you have any questions">{{ site.data.oc['tracks']['roles'][page.track.chairs]['label'] }}</a> if you have any questions.
		</p>
	</div>

	<div class="col-xl-4 col-lg-5 col-md-6 col-12">
		<h2>Important dates</h2>
		<p>
			{% for date in site.data.track_dates[page.track.dates] %}
			{{ date.label }}: {% if date.extended_date %}<strike>{{ date.date }}</strike> <strong>{{ date.extended_date }}</strong>{% else %}<strong>{{ date.date }}</strong>{% endif %}<br>
			{% endfor %}
		</p>
		<p>
			<em class="small">All deadlines are at 23:59 Anywhere on Earth</em>
		</p>
	</div>
</div>
